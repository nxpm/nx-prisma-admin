import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MetaEnum = {
  __typename?: 'MetaEnum'
  id?: Maybe<Scalars['String']>
  values?: Maybe<Array<Scalars['String']>>
}

export type MetaField = {
  __typename?: 'MetaField'
  enum?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['Boolean']>
  relation?: Maybe<Scalars['Boolean']>
  required?: Maybe<Scalars['Boolean']>
  type?: Maybe<Scalars['String']>
}

export type MetaModel = {
  __typename?: 'MetaModel'
  fields?: Maybe<Array<MetaField>>
  id?: Maybe<Scalars['String']>
}

export type MetaModelData = {
  __typename?: 'MetaModelData'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<Scalars['JSON']>>
  model?: Maybe<MetaModel>
  schema?: Maybe<MetaSchema>
}

export type MetaSchema = {
  __typename?: 'MetaSchema'
  enums?: Maybe<Array<MetaEnum>>
  models?: Maybe<Array<MetaModel>>
}

export type Mutation = {
  __typename?: 'Mutation'
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  metaCreateModelData?: Maybe<Scalars['JSON']>
  metaDeleteModelRecord?: Maybe<Scalars['JSON']>
  register?: Maybe<UserToken>
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationMetaCreateModelDataArgs = {
  data: Scalars['JSON']
  model: Scalars['String']
}

export type MutationMetaDeleteModelRecordArgs = {
  model: Scalars['String']
  recordId: Scalars['String']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<User>
  metaGenerated?: Maybe<Scalars['JSON']>
  metaModelData?: Maybe<MetaModelData>
  metaSchema?: Maybe<MetaSchema>
  uptime?: Maybe<Scalars['Float']>
}

export type QueryMetaModelDataArgs = {
  model: Scalars['String']
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UserTokenDetailsFragment = { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
    user: { __typename?: 'User' } & UserDetailsFragment
  }

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'username' | 'avatarUrl' | 'email'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type MetaEnumDetailsFragment = { __typename?: 'MetaEnum' } & Pick<MetaEnum, 'id' | 'values'>

export type MetaModelDetailsFragment = { __typename?: 'MetaModel' } & Pick<MetaModel, 'id'> & {
    fields?: Maybe<Array<{ __typename?: 'MetaField' } & MetaFieldDetailsFragment>>
  }

export type MetaFieldDetailsFragment = { __typename?: 'MetaField' } & Pick<
  MetaField,
  'id' | 'type' | 'required' | 'enum' | 'relation' | 'list'
>

export type MetaSchemaQueryVariables = Exact<{ [key: string]: never }>

export type MetaSchemaQuery = { __typename?: 'Query' } & {
  schema?: Maybe<
    { __typename?: 'MetaSchema' } & {
      models?: Maybe<Array<{ __typename?: 'MetaModel' } & MetaModelDetailsFragment>>
      enums?: Maybe<Array<{ __typename?: 'MetaEnum' } & MetaEnumDetailsFragment>>
    }
  >
}

export type MetaGeneratedQueryVariables = Exact<{ [key: string]: never }>

export type MetaGeneratedQuery = { __typename?: 'Query' } & { generated: Query['metaGenerated'] }

export type MetaModelDataQueryVariables = Exact<{
  model: Scalars['String']
}>

export type MetaModelDataQuery = { __typename?: 'Query' } & {
  generated?: Maybe<
    { __typename?: 'MetaModelData' } & Pick<MetaModelData, 'count' | 'data'> & {
        model?: Maybe<{ __typename?: 'MetaModel' } & MetaModelDetailsFragment>
        schema?: Maybe<
          { __typename?: 'MetaSchema' } & {
            models?: Maybe<Array<{ __typename?: 'MetaModel' } & MetaModelDetailsFragment>>
            enums?: Maybe<Array<{ __typename?: 'MetaEnum' } & MetaEnumDetailsFragment>>
          }
        >
      }
  >
}

export type MetaCreateModelDataMutationVariables = Exact<{
  model: Scalars['String']
  data: Scalars['JSON']
}>

export type MetaCreateModelDataMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'metaCreateModelData'>

export type MetaDeleteModelRecordMutationVariables = Exact<{
  model: Scalars['String']
  recordId: Scalars['String']
}>

export type MetaDeleteModelRecordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'metaDeleteModelRecord'>

export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    username
    avatarUrl
    email
  }
`
export const UserTokenDetailsFragmentDoc = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const MetaEnumDetailsFragmentDoc = gql`
  fragment MetaEnumDetails on MetaEnum {
    id
    values
  }
`
export const MetaFieldDetailsFragmentDoc = gql`
  fragment MetaFieldDetails on MetaField {
    id
    type
    required
    enum
    relation
    list
  }
`
export const MetaModelDetailsFragmentDoc = gql`
  fragment MetaModelDetails on MetaModel {
    id
    fields {
      ...MetaFieldDetails
    }
  }
  ${MetaFieldDetailsFragmentDoc}
`
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MetaSchemaDocument = gql`
  query MetaSchema {
    schema: metaSchema {
      models {
        ...MetaModelDetails
      }
      enums {
        ...MetaEnumDetails
      }
    }
  }
  ${MetaModelDetailsFragmentDoc}
  ${MetaEnumDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MetaSchemaGQL extends Apollo.Query<MetaSchemaQuery, MetaSchemaQueryVariables> {
  document = MetaSchemaDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MetaGeneratedDocument = gql`
  query MetaGenerated {
    generated: metaGenerated
  }
`

@Injectable({
  providedIn: 'root',
})
export class MetaGeneratedGQL extends Apollo.Query<MetaGeneratedQuery, MetaGeneratedQueryVariables> {
  document = MetaGeneratedDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MetaModelDataDocument = gql`
  query MetaModelData($model: String!) {
    generated: metaModelData(model: $model) {
      count
      data
      model {
        ...MetaModelDetails
      }
      schema {
        models {
          ...MetaModelDetails
        }
        enums {
          ...MetaEnumDetails
        }
      }
    }
  }
  ${MetaModelDetailsFragmentDoc}
  ${MetaEnumDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MetaModelDataGQL extends Apollo.Query<MetaModelDataQuery, MetaModelDataQueryVariables> {
  document = MetaModelDataDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MetaCreateModelDataDocument = gql`
  mutation MetaCreateModelData($model: String!, $data: JSON!) {
    metaCreateModelData(model: $model, data: $data)
  }
`

@Injectable({
  providedIn: 'root',
})
export class MetaCreateModelDataGQL extends Apollo.Mutation<
  MetaCreateModelDataMutation,
  MetaCreateModelDataMutationVariables
> {
  document = MetaCreateModelDataDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MetaDeleteModelRecordDocument = gql`
  mutation MetaDeleteModelRecord($model: String!, $recordId: String!) {
    metaDeleteModelRecord(model: $model, recordId: $recordId)
  }
`

@Injectable({
  providedIn: 'root',
})
export class MetaDeleteModelRecordGQL extends Apollo.Mutation<
  MetaDeleteModelRecordMutation,
  MetaDeleteModelRecordMutationVariables
> {
  document = MetaDeleteModelRecordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private metaSchemaGql: MetaSchemaGQL,
    private metaGeneratedGql: MetaGeneratedGQL,
    private metaModelDataGql: MetaModelDataGQL,
    private metaCreateModelDataGql: MetaCreateModelDataGQL,
    private metaDeleteModelRecordGql: MetaDeleteModelRecordGQL,
  ) {}

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  metaSchema(variables?: MetaSchemaQueryVariables, options?: QueryOptionsAlone<MetaSchemaQueryVariables>) {
    return this.metaSchemaGql.fetch(variables, options)
  }

  metaSchemaWatch(variables?: MetaSchemaQueryVariables, options?: WatchQueryOptionsAlone<MetaSchemaQueryVariables>) {
    return this.metaSchemaGql.watch(variables, options)
  }

  metaGenerated(variables?: MetaGeneratedQueryVariables, options?: QueryOptionsAlone<MetaGeneratedQueryVariables>) {
    return this.metaGeneratedGql.fetch(variables, options)
  }

  metaGeneratedWatch(
    variables?: MetaGeneratedQueryVariables,
    options?: WatchQueryOptionsAlone<MetaGeneratedQueryVariables>,
  ) {
    return this.metaGeneratedGql.watch(variables, options)
  }

  metaModelData(variables: MetaModelDataQueryVariables, options?: QueryOptionsAlone<MetaModelDataQueryVariables>) {
    return this.metaModelDataGql.fetch(variables, options)
  }

  metaModelDataWatch(
    variables: MetaModelDataQueryVariables,
    options?: WatchQueryOptionsAlone<MetaModelDataQueryVariables>,
  ) {
    return this.metaModelDataGql.watch(variables, options)
  }

  metaCreateModelData(
    variables: MetaCreateModelDataMutationVariables,
    options?: MutationOptionsAlone<MetaCreateModelDataMutation, MetaCreateModelDataMutationVariables>,
  ) {
    return this.metaCreateModelDataGql.mutate(variables, options)
  }

  metaDeleteModelRecord(
    variables: MetaDeleteModelRecordMutationVariables,
    options?: MutationOptionsAlone<MetaDeleteModelRecordMutation, MetaDeleteModelRecordMutationVariables>,
  ) {
    return this.metaDeleteModelRecordGql.mutate(variables, options)
  }
}
