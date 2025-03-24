/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `favorites` collection */
  deleteFromfavoritesCollection: FavoritesDeleteResponse;
  /** Deletes zero or more records from the `profile` collection */
  deleteFromprofileCollection: ProfileDeleteResponse;
  /** Deletes zero or more records from the `raffle` collection */
  deleteFromraffleCollection: RaffleDeleteResponse;
  /** Deletes zero or more records from the `raffle_participant` collection */
  deleteFromraffle_participantCollection: Raffle_ParticipantDeleteResponse;
  /** Deletes zero or more records from the `restaurant` collection */
  deleteFromrestaurantCollection: RestaurantDeleteResponse;
  /** Deletes zero or more records from the `restaurant_image` collection */
  deleteFromrestaurant_imageCollection: Restaurant_ImageDeleteResponse;
  /** Deletes zero or more records from the `reviews` collection */
  deleteFromreviewsCollection: ReviewsDeleteResponse;
  /** Deletes zero or more records from the `reviews_image` collection */
  deleteFromreviews_imageCollection: Reviews_ImageDeleteResponse;
  enter_raffle?: Maybe<Scalars['Boolean']['output']>;
  /** Adds one or more `favorites` records to the collection */
  insertIntofavoritesCollection?: Maybe<FavoritesInsertResponse>;
  /** Adds one or more `profile` records to the collection */
  insertIntoprofileCollection?: Maybe<ProfileInsertResponse>;
  /** Adds one or more `raffle` records to the collection */
  insertIntoraffleCollection?: Maybe<RaffleInsertResponse>;
  /** Adds one or more `raffle_participant` records to the collection */
  insertIntoraffle_participantCollection?: Maybe<Raffle_ParticipantInsertResponse>;
  /** Adds one or more `restaurant` records to the collection */
  insertIntorestaurantCollection?: Maybe<RestaurantInsertResponse>;
  /** Adds one or more `restaurant_image` records to the collection */
  insertIntorestaurant_imageCollection?: Maybe<Restaurant_ImageInsertResponse>;
  /** Adds one or more `reviews` records to the collection */
  insertIntoreviewsCollection?: Maybe<ReviewsInsertResponse>;
  /** Adds one or more `reviews_image` records to the collection */
  insertIntoreviews_imageCollection?: Maybe<Reviews_ImageInsertResponse>;
  /** Updates zero or more records in the `favorites` collection */
  updatefavoritesCollection: FavoritesUpdateResponse;
  /** Updates zero or more records in the `profile` collection */
  updateprofileCollection: ProfileUpdateResponse;
  /** Updates zero or more records in the `raffle` collection */
  updateraffleCollection: RaffleUpdateResponse;
  /** Updates zero or more records in the `raffle_participant` collection */
  updateraffle_participantCollection: Raffle_ParticipantUpdateResponse;
  /** Updates zero or more records in the `restaurant` collection */
  updaterestaurantCollection: RestaurantUpdateResponse;
  /** Updates zero or more records in the `restaurant_image` collection */
  updaterestaurant_imageCollection: Restaurant_ImageUpdateResponse;
  /** Updates zero or more records in the `reviews` collection */
  updatereviewsCollection: ReviewsUpdateResponse;
  /** Updates zero or more records in the `reviews_image` collection */
  updatereviews_imageCollection: Reviews_ImageUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromfavoritesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FavoritesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprofileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromraffleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RaffleFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromraffle_ParticipantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Raffle_ParticipantFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrestaurant_ImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Restaurant_ImageFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromreviewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReviewsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromreviews_ImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Reviews_ImageFilter>;
};


/** The root type for creating and mutating data */
export type MutationEnter_RaffleArgs = {
  p_raffle_id: Scalars['UUID']['input'];
  p_user_id: Scalars['UUID']['input'];
};


/** The root type for creating and mutating data */
export type MutationInsertIntofavoritesCollectionArgs = {
  objects: Array<FavoritesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprofileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoraffleCollectionArgs = {
  objects: Array<RaffleInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoraffle_ParticipantCollectionArgs = {
  objects: Array<Raffle_ParticipantInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorestaurantCollectionArgs = {
  objects: Array<RestaurantInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorestaurant_ImageCollectionArgs = {
  objects: Array<Restaurant_ImageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoreviewsCollectionArgs = {
  objects: Array<ReviewsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoreviews_ImageCollectionArgs = {
  objects: Array<Reviews_ImageInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatefavoritesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<FavoritesFilter>;
  set: FavoritesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprofileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateraffleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RaffleFilter>;
  set: RaffleUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateraffle_ParticipantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Raffle_ParticipantFilter>;
  set: Raffle_ParticipantUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
  set: RestaurantUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterestaurant_ImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Restaurant_ImageFilter>;
  set: Restaurant_ImageUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatereviewsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ReviewsFilter>;
  set: ReviewsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatereviews_ImageCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Reviews_ImageFilter>;
  set: Reviews_ImageUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `favorites` */
  favoritesCollection?: Maybe<FavoritesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `profile` */
  profileCollection?: Maybe<ProfileConnection>;
  /** A pagable collection of type `raffle` */
  raffleCollection?: Maybe<RaffleConnection>;
  /** A pagable collection of type `raffle_participant` */
  raffle_participantCollection?: Maybe<Raffle_ParticipantConnection>;
  /** A pagable collection of type `restaurant` */
  restaurantCollection?: Maybe<RestaurantConnection>;
  /** A pagable collection of type `restaurant_image` */
  restaurant_imageCollection?: Maybe<Restaurant_ImageConnection>;
  /** A pagable collection of type `reviews` */
  reviewsCollection?: Maybe<ReviewsConnection>;
  /** A pagable collection of type `reviews_image` */
  reviews_imageCollection?: Maybe<Reviews_ImageConnection>;
};


/** The root type for querying data */
export type QueryFavoritesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FavoritesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryRaffleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RaffleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RaffleOrderBy>>;
};


/** The root type for querying data */
export type QueryRaffle_ParticipantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Raffle_ParticipantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Raffle_ParticipantOrderBy>>;
};


/** The root type for querying data */
export type QueryRestaurantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantOrderBy>>;
};


/** The root type for querying data */
export type QueryRestaurant_ImageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Restaurant_ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Restaurant_ImageOrderBy>>;
};


/** The root type for querying data */
export type QueryReviewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReviewsOrderBy>>;
};


/** The root type for querying data */
export type QueryReviews_ImageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Reviews_ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Reviews_ImageOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Favorites = Node & {
  __typename?: 'favorites';
  id: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type FavoritesConnection = {
  __typename?: 'favoritesConnection';
  edges: Array<FavoritesEdge>;
  pageInfo: PageInfo;
};

export type FavoritesDeleteResponse = {
  __typename?: 'favoritesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Favorites>;
};

export type FavoritesEdge = {
  __typename?: 'favoritesEdge';
  cursor: Scalars['String']['output'];
  node: Favorites;
};

export type FavoritesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FavoritesFilter>>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<FavoritesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FavoritesFilter>>;
  restaurant_id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type FavoritesInsertInput = {
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FavoritesInsertResponse = {
  __typename?: 'favoritesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Favorites>;
};

export type FavoritesOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  restaurant_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type FavoritesUpdateInput = {
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type FavoritesUpdateResponse = {
  __typename?: 'favoritesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Favorites>;
};

export type Profile = Node & {
  __typename?: 'profile';
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type ProfileConnection = {
  __typename?: 'profileConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
};

export type ProfileDeleteResponse = {
  __typename?: 'profileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileEdge = {
  __typename?: 'profileEdge';
  cursor: Scalars['String']['output'];
  node: Profile;
};

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfileFilter>>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfileFilter>>;
  phone?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ProfileInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfileInsertResponse = {
  __typename?: 'profileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ProfileUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfileUpdateResponse = {
  __typename?: 'profileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type Raffle = Node & {
  __typename?: 'raffle';
  available_seats?: Maybe<Scalars['Int']['output']>;
  end_datetime?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  raffle_participantCollection?: Maybe<Raffle_ParticipantConnection>;
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['Datetime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


export type RaffleRaffle_ParticipantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Raffle_ParticipantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Raffle_ParticipantOrderBy>>;
};

export type RaffleConnection = {
  __typename?: 'raffleConnection';
  edges: Array<RaffleEdge>;
  pageInfo: PageInfo;
};

export type RaffleDeleteResponse = {
  __typename?: 'raffleDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle>;
};

export type RaffleEdge = {
  __typename?: 'raffleEdge';
  cursor: Scalars['String']['output'];
  node: Raffle;
};

export type RaffleFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RaffleFilter>>;
  available_seats?: InputMaybe<IntFilter>;
  end_datetime?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RaffleFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RaffleFilter>>;
  restaurant_id?: InputMaybe<IntFilter>;
  start_datetime?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<StringFilter>;
};

export type RaffleInsertInput = {
  available_seats?: InputMaybe<Scalars['Int']['input']>;
  end_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  start_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type RaffleInsertResponse = {
  __typename?: 'raffleInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle>;
};

export type RaffleOrderBy = {
  available_seats?: InputMaybe<OrderByDirection>;
  end_datetime?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  restaurant_id?: InputMaybe<OrderByDirection>;
  start_datetime?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type RaffleUpdateInput = {
  available_seats?: InputMaybe<Scalars['Int']['input']>;
  end_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  start_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type RaffleUpdateResponse = {
  __typename?: 'raffleUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle>;
};

export type Raffle_Participant = Node & {
  __typename?: 'raffle_participant';
  entry_datetime?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['Int']['output'];
  is_winner?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notification_sent?: Maybe<Scalars['Boolean']['output']>;
  raffle?: Maybe<Raffle>;
  raffle_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type Raffle_ParticipantConnection = {
  __typename?: 'raffle_participantConnection';
  edges: Array<Raffle_ParticipantEdge>;
  pageInfo: PageInfo;
};

export type Raffle_ParticipantDeleteResponse = {
  __typename?: 'raffle_participantDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle_Participant>;
};

export type Raffle_ParticipantEdge = {
  __typename?: 'raffle_participantEdge';
  cursor: Scalars['String']['output'];
  node: Raffle_Participant;
};

export type Raffle_ParticipantFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Raffle_ParticipantFilter>>;
  entry_datetime?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  is_winner?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Raffle_ParticipantFilter>;
  notification_sent?: InputMaybe<BooleanFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Raffle_ParticipantFilter>>;
  raffle_id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Raffle_ParticipantInsertInput = {
  entry_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  is_winner?: InputMaybe<Scalars['Boolean']['input']>;
  notification_sent?: InputMaybe<Scalars['Boolean']['input']>;
  raffle_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Raffle_ParticipantInsertResponse = {
  __typename?: 'raffle_participantInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle_Participant>;
};

export type Raffle_ParticipantOrderBy = {
  entry_datetime?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_winner?: InputMaybe<OrderByDirection>;
  notification_sent?: InputMaybe<OrderByDirection>;
  raffle_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Raffle_ParticipantUpdateInput = {
  entry_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  is_winner?: InputMaybe<Scalars['Boolean']['input']>;
  notification_sent?: InputMaybe<Scalars['Boolean']['input']>;
  raffle_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Raffle_ParticipantUpdateResponse = {
  __typename?: 'raffle_participantUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Raffle_Participant>;
};

export type Restaurant = Node & {
  __typename?: 'restaurant';
  address?: Maybe<Scalars['String']['output']>;
  closing_hours?: Maybe<Scalars['Time']['output']>;
  cuisine_type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favoritesCollection?: Maybe<FavoritesConnection>;
  id: Scalars['Int']['output'];
  max_capacity?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  opening_hours?: Maybe<Scalars['Time']['output']>;
  raffleCollection?: Maybe<RaffleConnection>;
  restaurant_imageCollection?: Maybe<Restaurant_ImageConnection>;
  reviewsCollection?: Maybe<ReviewsConnection>;
};


export type RestaurantFavoritesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<FavoritesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FavoritesOrderBy>>;
};


export type RestaurantRaffleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RaffleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RaffleOrderBy>>;
};


export type RestaurantRestaurant_ImageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Restaurant_ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Restaurant_ImageOrderBy>>;
};


export type RestaurantReviewsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ReviewsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ReviewsOrderBy>>;
};

export type RestaurantConnection = {
  __typename?: 'restaurantConnection';
  edges: Array<RestaurantEdge>;
  pageInfo: PageInfo;
};

export type RestaurantDeleteResponse = {
  __typename?: 'restaurantDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantEdge = {
  __typename?: 'restaurantEdge';
  cursor: Scalars['String']['output'];
  node: Restaurant;
};

export type RestaurantFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RestaurantFilter>>;
  closing_hours?: InputMaybe<TimeFilter>;
  cuisine_type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  max_capacity?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RestaurantFilter>;
  opening_hours?: InputMaybe<TimeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RestaurantFilter>>;
};

export type RestaurantInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  closing_hours?: InputMaybe<Scalars['Time']['input']>;
  cuisine_type?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  max_capacity?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_hours?: InputMaybe<Scalars['Time']['input']>;
};

export type RestaurantInsertResponse = {
  __typename?: 'restaurantInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  closing_hours?: InputMaybe<OrderByDirection>;
  cuisine_type?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  max_capacity?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  opening_hours?: InputMaybe<OrderByDirection>;
};

export type RestaurantUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  closing_hours?: InputMaybe<Scalars['Time']['input']>;
  cuisine_type?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  max_capacity?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_hours?: InputMaybe<Scalars['Time']['input']>;
};

export type RestaurantUpdateResponse = {
  __typename?: 'restaurantUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type Restaurant_Image = Node & {
  __typename?: 'restaurant_image';
  id: Scalars['Int']['output'];
  image_description?: Maybe<Scalars['String']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['Int']['output']>;
};

export type Restaurant_ImageConnection = {
  __typename?: 'restaurant_imageConnection';
  edges: Array<Restaurant_ImageEdge>;
  pageInfo: PageInfo;
};

export type Restaurant_ImageDeleteResponse = {
  __typename?: 'restaurant_imageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant_Image>;
};

export type Restaurant_ImageEdge = {
  __typename?: 'restaurant_imageEdge';
  cursor: Scalars['String']['output'];
  node: Restaurant_Image;
};

export type Restaurant_ImageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Restaurant_ImageFilter>>;
  id?: InputMaybe<IntFilter>;
  image_description?: InputMaybe<StringFilter>;
  image_url?: InputMaybe<StringFilter>;
  is_primary?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Restaurant_ImageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Restaurant_ImageFilter>>;
  restaurant_id?: InputMaybe<IntFilter>;
};

export type Restaurant_ImageInsertInput = {
  image_description?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Restaurant_ImageInsertResponse = {
  __typename?: 'restaurant_imageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant_Image>;
};

export type Restaurant_ImageOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  image_description?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  is_primary?: InputMaybe<OrderByDirection>;
  restaurant_id?: InputMaybe<OrderByDirection>;
};

export type Restaurant_ImageUpdateInput = {
  image_description?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Restaurant_ImageUpdateResponse = {
  __typename?: 'restaurant_imageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant_Image>;
};

export type Reviews = Node & {
  __typename?: 'reviews';
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['Int']['output']>;
  review_date?: Maybe<Scalars['Date']['output']>;
  reviews_imageCollection?: Maybe<Reviews_ImageConnection>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};


export type ReviewsReviews_ImageCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Reviews_ImageFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Reviews_ImageOrderBy>>;
};

export type ReviewsConnection = {
  __typename?: 'reviewsConnection';
  edges: Array<ReviewsEdge>;
  pageInfo: PageInfo;
};

export type ReviewsDeleteResponse = {
  __typename?: 'reviewsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type ReviewsEdge = {
  __typename?: 'reviewsEdge';
  cursor: Scalars['String']['output'];
  node: Reviews;
};

export type ReviewsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ReviewsFilter>>;
  comment?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ReviewsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ReviewsFilter>>;
  rating?: InputMaybe<IntFilter>;
  restaurant_id?: InputMaybe<IntFilter>;
  review_date?: InputMaybe<DateFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type ReviewsInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  review_date?: InputMaybe<Scalars['Date']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ReviewsInsertResponse = {
  __typename?: 'reviewsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type ReviewsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  rating?: InputMaybe<OrderByDirection>;
  restaurant_id?: InputMaybe<OrderByDirection>;
  review_date?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type ReviewsUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  restaurant_id?: InputMaybe<Scalars['Int']['input']>;
  review_date?: InputMaybe<Scalars['Date']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ReviewsUpdateResponse = {
  __typename?: 'reviewsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews>;
};

export type Reviews_Image = Node & {
  __typename?: 'reviews_image';
  id: Scalars['Int']['output'];
  id2?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  reviews?: Maybe<Reviews>;
  reviews_id?: Maybe<Scalars['Int']['output']>;
};

export type Reviews_ImageConnection = {
  __typename?: 'reviews_imageConnection';
  edges: Array<Reviews_ImageEdge>;
  pageInfo: PageInfo;
};

export type Reviews_ImageDeleteResponse = {
  __typename?: 'reviews_imageDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews_Image>;
};

export type Reviews_ImageEdge = {
  __typename?: 'reviews_imageEdge';
  cursor: Scalars['String']['output'];
  node: Reviews_Image;
};

export type Reviews_ImageFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Reviews_ImageFilter>>;
  id?: InputMaybe<IntFilter>;
  id2?: InputMaybe<IntFilter>;
  image_url?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Reviews_ImageFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Reviews_ImageFilter>>;
  reviews_id?: InputMaybe<IntFilter>;
};

export type Reviews_ImageInsertInput = {
  id2?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  reviews_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Reviews_ImageInsertResponse = {
  __typename?: 'reviews_imageInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews_Image>;
};

export type Reviews_ImageOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  id2?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  reviews_id?: InputMaybe<OrderByDirection>;
};

export type Reviews_ImageUpdateInput = {
  id2?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  reviews_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Reviews_ImageUpdateResponse = {
  __typename?: 'reviews_imageUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Reviews_Image>;
};
