import { ArrayDataSource } from '@angular/cdk/collections'
import { FlatTreeControl } from '@angular/cdk/tree'
import { Component, OnChanges, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FieldType } from '@ngx-formly/core'

export interface UiFormTreeNode {
  id?: string
  name?: string
  level?: number
  expandable?: boolean
  isExpanded?: boolean
  children?: UiFormTreeNode[]
}

@Component({
  template: `
    <div class="flex flex-col text-sm text-gray-400 border-l border-gray-800">
      <cdk-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <!-- This is the tree node template for leaf nodes -->
        <cdk-tree-node *cdkTreeNodeDef="let node" [style.display]="shouldRender(node) ? 'flex' : 'none'">
          <!-- use a disabled button to provide padding for tree leaf -->
          <button
            class="w-full focus:outline-none focus:ring-1 py-1 pl-4 flex items-center justify-between group border-r border-gray-900"
            (click)="selectNode(node)"
            [ngClass]="{
              'border-pink-400 bg-gray-800': node.id === formControl.value
            }"
          >
            <div class="flex group z-0">
              <div *ngFor="let i of [].constructor(treeControl.getLevel(node))" class="w-4 h-4"></div>
              <div class="whitespace-nowrap text-truncate">
                {{ node?.name || node?.id }}
              </div>
            </div>
            <div class="group-hover:opacity-90 opacity-0 text-gray-600 pr-1 space-x-1 flex z-1">
              <button
                class="hover:text-gray-400"
                *ngIf="showRenameFile"
                (click)="$event.stopPropagation(); renameFile(node)"
              >
                <ui-icon icon="rename"></ui-icon>
              </button>
              <button
                class="hover:text-gray-400"
                *ngIf="showDeleteFile"
                (click)="$event.stopPropagation(); deleteFile(node)"
              >
                <ui-icon icon="trash"></ui-icon>
              </button>
            </div>
          </button>
        </cdk-tree-node>

        <!-- This is the tree node template for expandable nodes -->
        <cdk-tree-node
          *cdkTreeNodeDef="let node; when: hasChild"
          [style.display]="shouldRender(node) ? 'flex' : 'none'"
        >
          <button
            cdkTreeNodeToggle
            [attr.aria-label]="'Toggle ' + node.name || node.id"
            (click)="node.isExpanded = !node.isExpanded"
            [style.visibility]="node.expandable ? 'visible' : 'hidden'"
            class="w-full flex justify-between group items-center focus:outline-none focus:ring-1 py-1"
          >
            <div class="flex group items-center">
              <span *ngFor="let i of [].constructor(treeControl.getLevel(node))" class="w-4 h-4"> </span>
              <ui-icon class="w-3" [icon]="treeControl.isExpanded(node) ? 'chevronDown' : 'chevronRight'"></ui-icon>
              <span class="ml-1">
                {{ node?.name || node?.id }}
              </span>
            </div>
            <div class="group-hover:opacity-90 opacity-0 text-gray-600 pr-1 space-x-1 flex">
              <button
                class="hover:text-gray-400"
                *ngIf="showCreateFile"
                (click)="$event.stopPropagation(); createFile(node)"
              >
                <ui-icon icon="newFile"></ui-icon>
              </button>
              <button
                class="hover:text-gray-400"
                *ngIf="showCreateDir"
                (click)="$event.stopPropagation(); createDir(node)"
              >
                <ui-icon icon="newDir"></ui-icon>
              </button>
              <button
                class="hover:text-gray-400"
                *ngIf="showRenameDir"
                (click)="$event.stopPropagation(); renameDir(node)"
              >
                <ui-icon icon="rename"></ui-icon>
              </button>
              <button
                class="hover:text-gray-400"
                *ngIf="showDeleteDir"
                (click)="$event.stopPropagation(); deleteDir(node)"
              >
                <ui-icon icon="trash"></ui-icon>
              </button>
            </div>
          </button>
        </cdk-tree-node>
      </cdk-tree>
    </div>
  `,
})
export class UiFormTreeComponent extends FieldType implements OnChanges, OnInit {
  formControl!: FormControl

  treeControl = new FlatTreeControl<UiFormTreeNode>(
    (node) => node.level,
    (node) => node.expandable,
  )

  get dataSource() {
    return new ArrayDataSource(this.items)
  }

  get items(): UiFormTreeNode[] {
    return this.to.items || []
  }

  // hasChild = (_: number, node: UiFormTreeNode) =>
  //   !!node.children && node.children.length > 0;

  selectNode(node) {
    this.form.get(this.to.currentNode || 'currentNode')?.setValue(node)
    this.formControl.setValue(node?.id)
  }
  ngOnInit(): void {
    function findTreeNodes(tree: UiFormTreeNode[], id: string): UiFormTreeNode[] {
      console.log('findTreeNode', id)
      return tree.filter((item) => {
        if (item.id === id) {
          console.log('Item.id === id', item.id, id)
          return item
        }
        if (item.children?.length) {
          console.log('Search Children', item.id)
          const children = findTreeNodes(item.children, id)
          console.log({ children })
        }
        return false
      })
    }

    console.log(this.formControl.value)
    const currentFile: string = this.formControl.value || ''
    const parents: string[] = currentFile.includes('/') ? currentFile.split('/') : []
    const fileName: string = parents.slice(-1)[0] || ''
    const parentPath = currentFile.replace(fileName, '')
    // const parentIds = parents.slice(0, parents.length - 1);
    // let path;
    // for (const parentId of parentIds) {
    //   path = path ? [path, parentId].join('/') : parentId;
    //   console.log(parentId);
    //   console.log(path);
    const findNodes = findTreeNodes(this.items, parentPath)
    console.log('findNodes', findNodes)
    //   // this.treeControl.expand(findNode);
    // }
    // console.log('Init', { parents:  });
  }
  ngOnChanges(): void {
    console.log('Change')
    // const sel: SelectionModel<UiFormTreeNode> = {}
    // sel.select()
    // this.treeControl.expansionModel = []
  }

  hasChild = (_: number, node: UiFormTreeNode) => node.expandable

  getParentNode(node: UiFormTreeNode) {
    const nodeIndex = this.items.indexOf(node)

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.items[i].level === node.level - 1) {
        return this.items[i]
      }
    }

    return null
  }

  shouldRender(node: UiFormTreeNode) {
    let parent = this.getParentNode(node)
    while (parent) {
      if (!parent.isExpanded) {
        return false
      }
      parent = this.getParentNode(parent)
    }
    return true
  }

  get showCreateDir() {
    return !!this.to?.createDir
  }

  get showCreateFile() {
    return !!this.to?.createFile
  }

  get showRenameDir() {
    return !!this.to?.renameDir
  }

  get showRenameFile() {
    return !!this.to?.renameFile
  }

  get showDeleteDir() {
    return !!this.to?.deleteDir
  }

  get showDeleteFile() {
    return !!this.to?.deleteFile
  }

  createDir(node) {
    const name = prompt(`Create new directory ${node.id ? 'in ' + node.id : ''}`)
    this.to?.createDir(node.id, name).subscribe((res) => {
      console.log('createDir res', res)
    })
  }

  createFile(node) {
    const name = prompt(`Create new file ${node.id ? 'in ' + node.id : ''}`)
    this.to?.createFile(node.id, name).subscribe((res) => {
      console.log('createFile res', res)
    })
  }

  renameDir(node) {
    const name = prompt(`Rename directory ${node.name}`, node.name)
    this.to?.renameDir(node.id, name).subscribe((res) => {
      console.log('renameDir res', res)
    })
  }

  renameFile(node) {
    const name = prompt(`Rename file ${node.name}`, node.name)
    this.to?.renameFile(node.id, name).subscribe((res) => {
      console.log('renameFile res', res)
    })
  }

  deleteDir(node) {
    if (confirm('Are you sure?')) {
      this.to?.deleteDir(node.id).subscribe((res) => {
        console.log('deleteDir res', res)
      })
    }
  }
  deleteFile(node) {
    if (confirm('Are you sure?')) {
      this.to?.deleteFile(node.id).subscribe((res) => {
        console.log('deleteFile res', res)
      })
    }
  }
}
