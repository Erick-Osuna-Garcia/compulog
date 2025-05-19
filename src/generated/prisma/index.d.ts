
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Equipo
 * 
 */
export type Equipo = $Result.DefaultSelection<Prisma.$EquipoPayload>
/**
 * Model Ubicacion
 * 
 */
export type Ubicacion = $Result.DefaultSelection<Prisma.$UbicacionPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Mantenimiento
 * 
 */
export type Mantenimiento = $Result.DefaultSelection<Prisma.$MantenimientoPayload>
/**
 * Model Prestamo
 * 
 */
export type Prestamo = $Result.DefaultSelection<Prisma.$PrestamoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipos
 * const equipos = await prisma.equipo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipos
   * const equipos = await prisma.equipo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.equipo`: Exposes CRUD operations for the **Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.EquipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **Ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.UbicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mantenimiento`: Exposes CRUD operations for the **Mantenimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mantenimientos
    * const mantenimientos = await prisma.mantenimiento.findMany()
    * ```
    */
  get mantenimiento(): Prisma.MantenimientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamo`: Exposes CRUD operations for the **Prestamo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamo.findMany()
    * ```
    */
  get prestamo(): Prisma.PrestamoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Equipo: 'Equipo',
    Ubicacion: 'Ubicacion',
    Usuario: 'Usuario',
    Mantenimiento: 'Mantenimiento',
    Prestamo: 'Prestamo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "equipo" | "ubicacion" | "usuario" | "mantenimiento" | "prestamo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipo: {
        payload: Prisma.$EquipoPayload<ExtArgs>
        fields: Prisma.EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findFirst: {
            args: Prisma.EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findMany: {
            args: Prisma.EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          create: {
            args: Prisma.EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          createMany: {
            args: Prisma.EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          delete: {
            args: Prisma.EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          update: {
            args: Prisma.EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          deleteMany: {
            args: Prisma.EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          upsert: {
            args: Prisma.EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
          }
        }
      }
      Ubicacion: {
        payload: Prisma.$UbicacionPayload<ExtArgs>
        fields: Prisma.UbicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findFirst: {
            args: Prisma.UbicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findMany: {
            args: Prisma.UbicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          create: {
            args: Prisma.UbicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          createMany: {
            args: Prisma.UbicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          delete: {
            args: Prisma.UbicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          update: {
            args: Prisma.UbicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          upsert: {
            args: Prisma.UbicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.UbicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Mantenimiento: {
        payload: Prisma.$MantenimientoPayload<ExtArgs>
        fields: Prisma.MantenimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MantenimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MantenimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          findFirst: {
            args: Prisma.MantenimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MantenimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          findMany: {
            args: Prisma.MantenimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          create: {
            args: Prisma.MantenimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          createMany: {
            args: Prisma.MantenimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MantenimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          delete: {
            args: Prisma.MantenimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          update: {
            args: Prisma.MantenimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          deleteMany: {
            args: Prisma.MantenimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MantenimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MantenimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          upsert: {
            args: Prisma.MantenimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          aggregate: {
            args: Prisma.MantenimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMantenimiento>
          }
          groupBy: {
            args: Prisma.MantenimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MantenimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MantenimientoCountArgs<ExtArgs>
            result: $Utils.Optional<MantenimientoCountAggregateOutputType> | number
          }
        }
      }
      Prestamo: {
        payload: Prisma.$PrestamoPayload<ExtArgs>
        fields: Prisma.PrestamoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestamoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestamoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          findFirst: {
            args: Prisma.PrestamoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestamoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          findMany: {
            args: Prisma.PrestamoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          create: {
            args: Prisma.PrestamoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          createMany: {
            args: Prisma.PrestamoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestamoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          delete: {
            args: Prisma.PrestamoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          update: {
            args: Prisma.PrestamoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          deleteMany: {
            args: Prisma.PrestamoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestamoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestamoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>[]
          }
          upsert: {
            args: Prisma.PrestamoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamoPayload>
          }
          aggregate: {
            args: Prisma.PrestamoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamo>
          }
          groupBy: {
            args: Prisma.PrestamoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestamoCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    equipo?: EquipoOmit
    ubicacion?: UbicacionOmit
    usuario?: UsuarioOmit
    mantenimiento?: MantenimientoOmit
    prestamo?: PrestamoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EquipoCountOutputType
   */

  export type EquipoCountOutputType = {
    mantenimientos: number
    prestamos: number
  }

  export type EquipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mantenimientos?: boolean | EquipoCountOutputTypeCountMantenimientosArgs
    prestamos?: boolean | EquipoCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipoCountOutputType
     */
    select?: EquipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountMantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MantenimientoWhereInput
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
  }


  /**
   * Count Type UbicacionCountOutputType
   */

  export type UbicacionCountOutputType = {
    equipos: number
  }

  export type UbicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | UbicacionCountOutputTypeCountEquiposArgs
  }

  // Custom InputTypes
  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionCountOutputType
     */
    select?: UbicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    equipos: number
    prestamos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | UsuarioCountOutputTypeCountEquiposArgs
    prestamos?: boolean | UsuarioCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    id_equipo: number | null
    id_ubicacion: number | null
    id_usuario: number | null
  }

  export type EquipoSumAggregateOutputType = {
    id_equipo: number | null
    id_ubicacion: number | null
    id_usuario: number | null
  }

  export type EquipoMinAggregateOutputType = {
    id_equipo: number | null
    nombre_equipo: string | null
    tipo_equipo: string | null
    marca: string | null
    modelo: string | null
    numero_serie: string | null
    sistema_operativo: string | null
    procesador: string | null
    ram: string | null
    disco_duro: string | null
    fecha_compra: Date | null
    estado: string | null
    id_ubicacion: number | null
    id_usuario: number | null
  }

  export type EquipoMaxAggregateOutputType = {
    id_equipo: number | null
    nombre_equipo: string | null
    tipo_equipo: string | null
    marca: string | null
    modelo: string | null
    numero_serie: string | null
    sistema_operativo: string | null
    procesador: string | null
    ram: string | null
    disco_duro: string | null
    fecha_compra: Date | null
    estado: string | null
    id_ubicacion: number | null
    id_usuario: number | null
  }

  export type EquipoCountAggregateOutputType = {
    id_equipo: number
    nombre_equipo: number
    tipo_equipo: number
    marca: number
    modelo: number
    numero_serie: number
    sistema_operativo: number
    procesador: number
    ram: number
    disco_duro: number
    fecha_compra: number
    estado: number
    id_ubicacion: number
    id_usuario: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    id_equipo?: true
    id_ubicacion?: true
    id_usuario?: true
  }

  export type EquipoSumAggregateInputType = {
    id_equipo?: true
    id_ubicacion?: true
    id_usuario?: true
  }

  export type EquipoMinAggregateInputType = {
    id_equipo?: true
    nombre_equipo?: true
    tipo_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    sistema_operativo?: true
    procesador?: true
    ram?: true
    disco_duro?: true
    fecha_compra?: true
    estado?: true
    id_ubicacion?: true
    id_usuario?: true
  }

  export type EquipoMaxAggregateInputType = {
    id_equipo?: true
    nombre_equipo?: true
    tipo_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    sistema_operativo?: true
    procesador?: true
    ram?: true
    disco_duro?: true
    fecha_compra?: true
    estado?: true
    id_ubicacion?: true
    id_usuario?: true
  }

  export type EquipoCountAggregateInputType = {
    id_equipo?: true
    nombre_equipo?: true
    tipo_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    sistema_operativo?: true
    procesador?: true
    ram?: true
    disco_duro?: true
    fecha_compra?: true
    estado?: true
    id_ubicacion?: true
    id_usuario?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipo to aggregate.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithAggregationInput | EquipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    id_equipo: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date
    estado: string
    id_ubicacion: number
    id_usuario: number
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre_equipo?: boolean
    tipo_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    sistema_operativo?: boolean
    procesador?: boolean
    ram?: boolean
    disco_duro?: boolean
    fecha_compra?: boolean
    estado?: boolean
    id_ubicacion?: boolean
    id_usuario?: boolean
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mantenimientos?: boolean | Equipo$mantenimientosArgs<ExtArgs>
    prestamos?: boolean | Equipo$prestamosArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre_equipo?: boolean
    tipo_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    sistema_operativo?: boolean
    procesador?: boolean
    ram?: boolean
    disco_duro?: boolean
    fecha_compra?: boolean
    estado?: boolean
    id_ubicacion?: boolean
    id_usuario?: boolean
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    nombre_equipo?: boolean
    tipo_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    sistema_operativo?: boolean
    procesador?: boolean
    ram?: boolean
    disco_duro?: boolean
    fecha_compra?: boolean
    estado?: boolean
    id_ubicacion?: boolean
    id_usuario?: boolean
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectScalar = {
    id_equipo?: boolean
    nombre_equipo?: boolean
    tipo_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    sistema_operativo?: boolean
    procesador?: boolean
    ram?: boolean
    disco_duro?: boolean
    fecha_compra?: boolean
    estado?: boolean
    id_ubicacion?: boolean
    id_usuario?: boolean
  }

  export type EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_equipo" | "nombre_equipo" | "tipo_equipo" | "marca" | "modelo" | "numero_serie" | "sistema_operativo" | "procesador" | "ram" | "disco_duro" | "fecha_compra" | "estado" | "id_ubicacion" | "id_usuario", ExtArgs["result"]["equipo"]>
  export type EquipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    mantenimientos?: boolean | Equipo$mantenimientosArgs<ExtArgs>
    prestamos?: boolean | Equipo$prestamosArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipo"
    objects: {
      ubicacion: Prisma.$UbicacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      mantenimientos: Prisma.$MantenimientoPayload<ExtArgs>[]
      prestamos: Prisma.$PrestamoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_equipo: number
      nombre_equipo: string
      tipo_equipo: string
      marca: string
      modelo: string
      numero_serie: string
      sistema_operativo: string
      procesador: string
      ram: string
      disco_duro: string
      fecha_compra: Date
      estado: string
      id_ubicacion: number
      id_usuario: number
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type EquipoGetPayload<S extends boolean | null | undefined | EquipoDefaultArgs> = $Result.GetResult<Prisma.$EquipoPayload, S>

  type EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipo'], meta: { name: 'Equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {EquipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipoFindUniqueArgs>(args: SelectSubset<T, EquipoFindUniqueArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipoFindFirstArgs>(args?: SelectSubset<T, EquipoFindFirstArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.findMany({ select: { id_equipo: true } })
     * 
     */
    findMany<T extends EquipoFindManyArgs>(args?: SelectSubset<T, EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {EquipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends EquipoCreateArgs>(args: SelectSubset<T, EquipoCreateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {EquipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipoCreateManyArgs>(args?: SelectSubset<T, EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {EquipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.createManyAndReturn({
     *   select: { id_equipo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {EquipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends EquipoDeleteArgs>(args: SelectSubset<T, EquipoDeleteArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {EquipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipoUpdateArgs>(args: SelectSubset<T, EquipoUpdateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {EquipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipoDeleteManyArgs>(args?: SelectSubset<T, EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipoUpdateManyArgs>(args: SelectSubset<T, EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {EquipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.updateManyAndReturn({
     *   select: { id_equipo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {EquipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends EquipoUpsertArgs>(args: SelectSubset<T, EquipoUpsertArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends EquipoCountArgs>(
      args?: Subset<T, EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipoGroupByArgs['orderBy'] }
        : { orderBy?: EquipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipo model
   */
  readonly fields: EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ubicacion<T extends UbicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbicacionDefaultArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mantenimientos<T extends Equipo$mantenimientosArgs<ExtArgs> = {}>(args?: Subset<T, Equipo$mantenimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestamos<T extends Equipo$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, Equipo$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipo model
   */
  interface EquipoFieldRefs {
    readonly id_equipo: FieldRef<"Equipo", 'Int'>
    readonly nombre_equipo: FieldRef<"Equipo", 'String'>
    readonly tipo_equipo: FieldRef<"Equipo", 'String'>
    readonly marca: FieldRef<"Equipo", 'String'>
    readonly modelo: FieldRef<"Equipo", 'String'>
    readonly numero_serie: FieldRef<"Equipo", 'String'>
    readonly sistema_operativo: FieldRef<"Equipo", 'String'>
    readonly procesador: FieldRef<"Equipo", 'String'>
    readonly ram: FieldRef<"Equipo", 'String'>
    readonly disco_duro: FieldRef<"Equipo", 'String'>
    readonly fecha_compra: FieldRef<"Equipo", 'DateTime'>
    readonly estado: FieldRef<"Equipo", 'String'>
    readonly id_ubicacion: FieldRef<"Equipo", 'Int'>
    readonly id_usuario: FieldRef<"Equipo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Equipo findUnique
   */
  export type EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findUniqueOrThrow
   */
  export type EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findFirst
   */
  export type EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findFirstOrThrow
   */
  export type EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findMany
   */
  export type EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipos to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo create
   */
  export type EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipo.
     */
    data: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
  }

  /**
   * Equipo createMany
   */
  export type EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo createManyAndReturn
   */
  export type EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo update
   */
  export type EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipo.
     */
    data: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
    /**
     * Choose, which Equipo to update.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo updateMany
   */
  export type EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo updateManyAndReturn
   */
  export type EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo upsert
   */
  export type EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipo to update in case it exists.
     */
    where: EquipoWhereUniqueInput
    /**
     * In case the Equipo found by the `where` argument doesn't exist, create a new Equipo with this data.
     */
    create: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
    /**
     * In case the Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
  }

  /**
   * Equipo delete
   */
  export type EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter which Equipo to delete.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo deleteMany
   */
  export type EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipos to delete
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to delete.
     */
    limit?: number
  }

  /**
   * Equipo.mantenimientos
   */
  export type Equipo$mantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    where?: MantenimientoWhereInput
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    cursor?: MantenimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Equipo.prestamos
   */
  export type Equipo$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    cursor?: PrestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Equipo without action
   */
  export type EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
  }


  /**
   * Model Ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionAvgAggregateOutputType = {
    id_ubicacion: number | null
  }

  export type UbicacionSumAggregateOutputType = {
    id_ubicacion: number | null
  }

  export type UbicacionMinAggregateOutputType = {
    id_ubicacion: number | null
    edificio: string | null
    piso: string | null
    oficina: string | null
  }

  export type UbicacionMaxAggregateOutputType = {
    id_ubicacion: number | null
    edificio: string | null
    piso: string | null
    oficina: string | null
  }

  export type UbicacionCountAggregateOutputType = {
    id_ubicacion: number
    edificio: number
    piso: number
    oficina: number
    _all: number
  }


  export type UbicacionAvgAggregateInputType = {
    id_ubicacion?: true
  }

  export type UbicacionSumAggregateInputType = {
    id_ubicacion?: true
  }

  export type UbicacionMinAggregateInputType = {
    id_ubicacion?: true
    edificio?: true
    piso?: true
    oficina?: true
  }

  export type UbicacionMaxAggregateInputType = {
    id_ubicacion?: true
    edificio?: true
    piso?: true
    oficina?: true
  }

  export type UbicacionCountAggregateInputType = {
    id_ubicacion?: true
    edificio?: true
    piso?: true
    oficina?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacion to aggregate.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type UbicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionWhereInput
    orderBy?: UbicacionOrderByWithAggregationInput | UbicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: UbicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _avg?: UbicacionAvgAggregateInputType
    _sum?: UbicacionSumAggregateInputType
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    id_ubicacion: number
    edificio: string
    piso: string
    oficina: string
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends UbicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    edificio?: boolean
    piso?: boolean
    oficina?: boolean
    equipos?: boolean | Ubicacion$equiposArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    edificio?: boolean
    piso?: boolean
    oficina?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ubicacion?: boolean
    edificio?: boolean
    piso?: boolean
    oficina?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectScalar = {
    id_ubicacion?: boolean
    edificio?: boolean
    piso?: boolean
    oficina?: boolean
  }

  export type UbicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ubicacion" | "edificio" | "piso" | "oficina", ExtArgs["result"]["ubicacion"]>
  export type UbicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | Ubicacion$equiposArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UbicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UbicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UbicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ubicacion"
    objects: {
      equipos: Prisma.$EquipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ubicacion: number
      edificio: string
      piso: string
      oficina: string
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type UbicacionGetPayload<S extends boolean | null | undefined | UbicacionDefaultArgs> = $Result.GetResult<Prisma.$UbicacionPayload, S>

  type UbicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface UbicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ubicacion'], meta: { name: 'Ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {UbicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionFindUniqueArgs>(args: SelectSubset<T, UbicacionFindUniqueArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionFindFirstArgs>(args?: SelectSubset<T, UbicacionFindFirstArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.findMany({ select: { id_ubicacion: true } })
     * 
     */
    findMany<T extends UbicacionFindManyArgs>(args?: SelectSubset<T, UbicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ubicacion.
     * @param {UbicacionCreateArgs} args - Arguments to create a Ubicacion.
     * @example
     * // Create one Ubicacion
     * const Ubicacion = await prisma.ubicacion.create({
     *   data: {
     *     // ... data to create a Ubicacion
     *   }
     * })
     * 
     */
    create<T extends UbicacionCreateArgs>(args: SelectSubset<T, UbicacionCreateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ubicacions.
     * @param {UbicacionCreateManyArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionCreateManyArgs>(args?: SelectSubset<T, UbicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubicacions and returns the data saved in the database.
     * @param {UbicacionCreateManyAndReturnArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubicacions and only return the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.createManyAndReturn({
     *   select: { id_ubicacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, UbicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ubicacion.
     * @param {UbicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends UbicacionDeleteArgs>(args: SelectSubset<T, UbicacionDeleteArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubicacion.
     * @param {UbicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionUpdateArgs>(args: SelectSubset<T, UbicacionUpdateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubicacions.
     * @param {UbicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionDeleteManyArgs>(args?: SelectSubset<T, UbicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionUpdateManyArgs>(args: SelectSubset<T, UbicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions and returns the data updated in the database.
     * @param {UbicacionUpdateManyAndReturnArgs} args - Arguments to update many Ubicacions.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubicacions and only return the `id_ubicacion`
     * const ubicacionWithId_ubicacionOnly = await prisma.ubicacion.updateManyAndReturn({
     *   select: { id_ubicacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UbicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, UbicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ubicacion.
     * @param {UbicacionUpsertArgs} args - Arguments to update or create a Ubicacion.
     * @example
     * // Update or create a Ubicacion
     * const ubicacion = await prisma.ubicacion.upsert({
     *   create: {
     *     // ... data to create a Ubicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubicacion we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionUpsertArgs>(args: SelectSubset<T, UbicacionUpsertArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends UbicacionCountArgs>(
      args?: Subset<T, UbicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UbicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UbicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ubicacion model
   */
  readonly fields: UbicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipos<T extends Ubicacion$equiposArgs<ExtArgs> = {}>(args?: Subset<T, Ubicacion$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ubicacion model
   */
  interface UbicacionFieldRefs {
    readonly id_ubicacion: FieldRef<"Ubicacion", 'Int'>
    readonly edificio: FieldRef<"Ubicacion", 'String'>
    readonly piso: FieldRef<"Ubicacion", 'String'>
    readonly oficina: FieldRef<"Ubicacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ubicacion findUnique
   */
  export type UbicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findUniqueOrThrow
   */
  export type UbicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findFirst
   */
  export type UbicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findFirstOrThrow
   */
  export type UbicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findMany
   */
  export type UbicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacions to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion create
   */
  export type UbicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Ubicacion.
     */
    data: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
  }

  /**
   * Ubicacion createMany
   */
  export type UbicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion createManyAndReturn
   */
  export type UbicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion update
   */
  export type UbicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Ubicacion.
     */
    data: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
    /**
     * Choose, which Ubicacion to update.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion updateMany
   */
  export type UbicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ubicacions.
     */
    data: XOR<UbicacionUpdateManyMutationInput, UbicacionUncheckedUpdateManyInput>
    /**
     * Filter which Ubicacions to update
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to update.
     */
    limit?: number
  }

  /**
   * Ubicacion updateManyAndReturn
   */
  export type UbicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * The data used to update Ubicacions.
     */
    data: XOR<UbicacionUpdateManyMutationInput, UbicacionUncheckedUpdateManyInput>
    /**
     * Filter which Ubicacions to update
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to update.
     */
    limit?: number
  }

  /**
   * Ubicacion upsert
   */
  export type UbicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Ubicacion to update in case it exists.
     */
    where: UbicacionWhereUniqueInput
    /**
     * In case the Ubicacion found by the `where` argument doesn't exist, create a new Ubicacion with this data.
     */
    create: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
    /**
     * In case the Ubicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
  }

  /**
   * Ubicacion delete
   */
  export type UbicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter which Ubicacion to delete.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion deleteMany
   */
  export type UbicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacions to delete
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to delete.
     */
    limit?: number
  }

  /**
   * Ubicacion.equipos
   */
  export type Ubicacion$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    cursor?: EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Ubicacion without action
   */
  export type UbicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    correo: string | null
    departamento: string | null
    rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    correo: string | null
    departamento: string | null
    rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    correo: number
    departamento: number
    rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
    departamento?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
    departamento?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    correo?: true
    departamento?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    correo: string
    departamento: string
    rol: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    departamento?: boolean
    rol?: boolean
    equipos?: boolean | Usuario$equiposArgs<ExtArgs>
    prestamos?: boolean | Usuario$prestamosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    departamento?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    departamento?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    correo?: boolean
    departamento?: boolean
    rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "correo" | "departamento" | "rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | Usuario$equiposArgs<ExtArgs>
    prestamos?: boolean | Usuario$prestamosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      equipos: Prisma.$EquipoPayload<ExtArgs>[]
      prestamos: Prisma.$PrestamoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      correo: string
      departamento: string
      rol: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipos<T extends Usuario$equiposArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestamos<T extends Usuario$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly departamento: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.equipos
   */
  export type Usuario$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    cursor?: EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Usuario.prestamos
   */
  export type Usuario$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    cursor?: PrestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Mantenimiento
   */

  export type AggregateMantenimiento = {
    _count: MantenimientoCountAggregateOutputType | null
    _avg: MantenimientoAvgAggregateOutputType | null
    _sum: MantenimientoSumAggregateOutputType | null
    _min: MantenimientoMinAggregateOutputType | null
    _max: MantenimientoMaxAggregateOutputType | null
  }

  export type MantenimientoAvgAggregateOutputType = {
    id_mantenimiento: number | null
    id_equipo: number | null
  }

  export type MantenimientoSumAggregateOutputType = {
    id_mantenimiento: number | null
    id_equipo: number | null
  }

  export type MantenimientoMinAggregateOutputType = {
    id_mantenimiento: number | null
    id_equipo: number | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
    tecnico: string | null
  }

  export type MantenimientoMaxAggregateOutputType = {
    id_mantenimiento: number | null
    id_equipo: number | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
    tecnico: string | null
  }

  export type MantenimientoCountAggregateOutputType = {
    id_mantenimiento: number
    id_equipo: number
    tipo: number
    descripcion: number
    fecha: number
    tecnico: number
    _all: number
  }


  export type MantenimientoAvgAggregateInputType = {
    id_mantenimiento?: true
    id_equipo?: true
  }

  export type MantenimientoSumAggregateInputType = {
    id_mantenimiento?: true
    id_equipo?: true
  }

  export type MantenimientoMinAggregateInputType = {
    id_mantenimiento?: true
    id_equipo?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    tecnico?: true
  }

  export type MantenimientoMaxAggregateInputType = {
    id_mantenimiento?: true
    id_equipo?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    tecnico?: true
  }

  export type MantenimientoCountAggregateInputType = {
    id_mantenimiento?: true
    id_equipo?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    tecnico?: true
    _all?: true
  }

  export type MantenimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mantenimiento to aggregate.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mantenimientos
    **/
    _count?: true | MantenimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MantenimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MantenimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MantenimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MantenimientoMaxAggregateInputType
  }

  export type GetMantenimientoAggregateType<T extends MantenimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateMantenimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMantenimiento[P]>
      : GetScalarType<T[P], AggregateMantenimiento[P]>
  }




  export type MantenimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MantenimientoWhereInput
    orderBy?: MantenimientoOrderByWithAggregationInput | MantenimientoOrderByWithAggregationInput[]
    by: MantenimientoScalarFieldEnum[] | MantenimientoScalarFieldEnum
    having?: MantenimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MantenimientoCountAggregateInputType | true
    _avg?: MantenimientoAvgAggregateInputType
    _sum?: MantenimientoSumAggregateInputType
    _min?: MantenimientoMinAggregateInputType
    _max?: MantenimientoMaxAggregateInputType
  }

  export type MantenimientoGroupByOutputType = {
    id_mantenimiento: number
    id_equipo: number
    tipo: string
    descripcion: string
    fecha: Date
    tecnico: string
    _count: MantenimientoCountAggregateOutputType | null
    _avg: MantenimientoAvgAggregateOutputType | null
    _sum: MantenimientoSumAggregateOutputType | null
    _min: MantenimientoMinAggregateOutputType | null
    _max: MantenimientoMaxAggregateOutputType | null
  }

  type GetMantenimientoGroupByPayload<T extends MantenimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MantenimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MantenimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MantenimientoGroupByOutputType[P]>
            : GetScalarType<T[P], MantenimientoGroupByOutputType[P]>
        }
      >
    >


  export type MantenimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mantenimiento?: boolean
    id_equipo?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    tecnico?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mantenimiento?: boolean
    id_equipo?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    tecnico?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mantenimiento?: boolean
    id_equipo?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    tecnico?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectScalar = {
    id_mantenimiento?: boolean
    id_equipo?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    tecnico?: boolean
  }

  export type MantenimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mantenimiento" | "id_equipo" | "tipo" | "descripcion" | "fecha" | "tecnico", ExtArgs["result"]["mantenimiento"]>
  export type MantenimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }
  export type MantenimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }
  export type MantenimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
  }

  export type $MantenimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mantenimiento"
    objects: {
      equipo: Prisma.$EquipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mantenimiento: number
      id_equipo: number
      tipo: string
      descripcion: string
      fecha: Date
      tecnico: string
    }, ExtArgs["result"]["mantenimiento"]>
    composites: {}
  }

  type MantenimientoGetPayload<S extends boolean | null | undefined | MantenimientoDefaultArgs> = $Result.GetResult<Prisma.$MantenimientoPayload, S>

  type MantenimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MantenimientoCountAggregateInputType | true
    }

  export interface MantenimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mantenimiento'], meta: { name: 'Mantenimiento' } }
    /**
     * Find zero or one Mantenimiento that matches the filter.
     * @param {MantenimientoFindUniqueArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MantenimientoFindUniqueArgs>(args: SelectSubset<T, MantenimientoFindUniqueArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mantenimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MantenimientoFindUniqueOrThrowArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MantenimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, MantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindFirstArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MantenimientoFindFirstArgs>(args?: SelectSubset<T, MantenimientoFindFirstArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindFirstOrThrowArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MantenimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, MantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mantenimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mantenimientos
     * const mantenimientos = await prisma.mantenimiento.findMany()
     * 
     * // Get first 10 Mantenimientos
     * const mantenimientos = await prisma.mantenimiento.findMany({ take: 10 })
     * 
     * // Only select the `id_mantenimiento`
     * const mantenimientoWithId_mantenimientoOnly = await prisma.mantenimiento.findMany({ select: { id_mantenimiento: true } })
     * 
     */
    findMany<T extends MantenimientoFindManyArgs>(args?: SelectSubset<T, MantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mantenimiento.
     * @param {MantenimientoCreateArgs} args - Arguments to create a Mantenimiento.
     * @example
     * // Create one Mantenimiento
     * const Mantenimiento = await prisma.mantenimiento.create({
     *   data: {
     *     // ... data to create a Mantenimiento
     *   }
     * })
     * 
     */
    create<T extends MantenimientoCreateArgs>(args: SelectSubset<T, MantenimientoCreateArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mantenimientos.
     * @param {MantenimientoCreateManyArgs} args - Arguments to create many Mantenimientos.
     * @example
     * // Create many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MantenimientoCreateManyArgs>(args?: SelectSubset<T, MantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mantenimientos and returns the data saved in the database.
     * @param {MantenimientoCreateManyAndReturnArgs} args - Arguments to create many Mantenimientos.
     * @example
     * // Create many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mantenimientos and only return the `id_mantenimiento`
     * const mantenimientoWithId_mantenimientoOnly = await prisma.mantenimiento.createManyAndReturn({
     *   select: { id_mantenimiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MantenimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, MantenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mantenimiento.
     * @param {MantenimientoDeleteArgs} args - Arguments to delete one Mantenimiento.
     * @example
     * // Delete one Mantenimiento
     * const Mantenimiento = await prisma.mantenimiento.delete({
     *   where: {
     *     // ... filter to delete one Mantenimiento
     *   }
     * })
     * 
     */
    delete<T extends MantenimientoDeleteArgs>(args: SelectSubset<T, MantenimientoDeleteArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mantenimiento.
     * @param {MantenimientoUpdateArgs} args - Arguments to update one Mantenimiento.
     * @example
     * // Update one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MantenimientoUpdateArgs>(args: SelectSubset<T, MantenimientoUpdateArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mantenimientos.
     * @param {MantenimientoDeleteManyArgs} args - Arguments to filter Mantenimientos to delete.
     * @example
     * // Delete a few Mantenimientos
     * const { count } = await prisma.mantenimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MantenimientoDeleteManyArgs>(args?: SelectSubset<T, MantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MantenimientoUpdateManyArgs>(args: SelectSubset<T, MantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mantenimientos and returns the data updated in the database.
     * @param {MantenimientoUpdateManyAndReturnArgs} args - Arguments to update many Mantenimientos.
     * @example
     * // Update many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mantenimientos and only return the `id_mantenimiento`
     * const mantenimientoWithId_mantenimientoOnly = await prisma.mantenimiento.updateManyAndReturn({
     *   select: { id_mantenimiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MantenimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, MantenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mantenimiento.
     * @param {MantenimientoUpsertArgs} args - Arguments to update or create a Mantenimiento.
     * @example
     * // Update or create a Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.upsert({
     *   create: {
     *     // ... data to create a Mantenimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mantenimiento we want to update
     *   }
     * })
     */
    upsert<T extends MantenimientoUpsertArgs>(args: SelectSubset<T, MantenimientoUpsertArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoCountArgs} args - Arguments to filter Mantenimientos to count.
     * @example
     * // Count the number of Mantenimientos
     * const count = await prisma.mantenimiento.count({
     *   where: {
     *     // ... the filter for the Mantenimientos we want to count
     *   }
     * })
    **/
    count<T extends MantenimientoCountArgs>(
      args?: Subset<T, MantenimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MantenimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MantenimientoAggregateArgs>(args: Subset<T, MantenimientoAggregateArgs>): Prisma.PrismaPromise<GetMantenimientoAggregateType<T>>

    /**
     * Group by Mantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MantenimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MantenimientoGroupByArgs['orderBy'] }
        : { orderBy?: MantenimientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mantenimiento model
   */
  readonly fields: MantenimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mantenimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MantenimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipo<T extends EquipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipoDefaultArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mantenimiento model
   */
  interface MantenimientoFieldRefs {
    readonly id_mantenimiento: FieldRef<"Mantenimiento", 'Int'>
    readonly id_equipo: FieldRef<"Mantenimiento", 'Int'>
    readonly tipo: FieldRef<"Mantenimiento", 'String'>
    readonly descripcion: FieldRef<"Mantenimiento", 'String'>
    readonly fecha: FieldRef<"Mantenimiento", 'DateTime'>
    readonly tecnico: FieldRef<"Mantenimiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mantenimiento findUnique
   */
  export type MantenimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento findUniqueOrThrow
   */
  export type MantenimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento findFirst
   */
  export type MantenimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mantenimientos.
     */
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento findFirstOrThrow
   */
  export type MantenimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mantenimientos.
     */
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento findMany
   */
  export type MantenimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimientos to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento create
   */
  export type MantenimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Mantenimiento.
     */
    data: XOR<MantenimientoCreateInput, MantenimientoUncheckedCreateInput>
  }

  /**
   * Mantenimiento createMany
   */
  export type MantenimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mantenimientos.
     */
    data: MantenimientoCreateManyInput | MantenimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mantenimiento createManyAndReturn
   */
  export type MantenimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * The data used to create many Mantenimientos.
     */
    data: MantenimientoCreateManyInput | MantenimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mantenimiento update
   */
  export type MantenimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Mantenimiento.
     */
    data: XOR<MantenimientoUpdateInput, MantenimientoUncheckedUpdateInput>
    /**
     * Choose, which Mantenimiento to update.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento updateMany
   */
  export type MantenimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mantenimientos.
     */
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyInput>
    /**
     * Filter which Mantenimientos to update
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to update.
     */
    limit?: number
  }

  /**
   * Mantenimiento updateManyAndReturn
   */
  export type MantenimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * The data used to update Mantenimientos.
     */
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyInput>
    /**
     * Filter which Mantenimientos to update
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mantenimiento upsert
   */
  export type MantenimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Mantenimiento to update in case it exists.
     */
    where: MantenimientoWhereUniqueInput
    /**
     * In case the Mantenimiento found by the `where` argument doesn't exist, create a new Mantenimiento with this data.
     */
    create: XOR<MantenimientoCreateInput, MantenimientoUncheckedCreateInput>
    /**
     * In case the Mantenimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MantenimientoUpdateInput, MantenimientoUncheckedUpdateInput>
  }

  /**
   * Mantenimiento delete
   */
  export type MantenimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter which Mantenimiento to delete.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento deleteMany
   */
  export type MantenimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mantenimientos to delete
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to delete.
     */
    limit?: number
  }

  /**
   * Mantenimiento without action
   */
  export type MantenimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
  }


  /**
   * Model Prestamo
   */

  export type AggregatePrestamo = {
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  export type PrestamoAvgAggregateOutputType = {
    id_prestamo: number | null
    id_equipo: number | null
    id_usuario: number | null
  }

  export type PrestamoSumAggregateOutputType = {
    id_prestamo: number | null
    id_equipo: number | null
    id_usuario: number | null
  }

  export type PrestamoMinAggregateOutputType = {
    id_prestamo: number | null
    id_equipo: number | null
    id_usuario: number | null
    fecha_prestamo: Date | null
    fecha_devolucion: Date | null
    estado: string | null
  }

  export type PrestamoMaxAggregateOutputType = {
    id_prestamo: number | null
    id_equipo: number | null
    id_usuario: number | null
    fecha_prestamo: Date | null
    fecha_devolucion: Date | null
    estado: string | null
  }

  export type PrestamoCountAggregateOutputType = {
    id_prestamo: number
    id_equipo: number
    id_usuario: number
    fecha_prestamo: number
    fecha_devolucion: number
    estado: number
    _all: number
  }


  export type PrestamoAvgAggregateInputType = {
    id_prestamo?: true
    id_equipo?: true
    id_usuario?: true
  }

  export type PrestamoSumAggregateInputType = {
    id_prestamo?: true
    id_equipo?: true
    id_usuario?: true
  }

  export type PrestamoMinAggregateInputType = {
    id_prestamo?: true
    id_equipo?: true
    id_usuario?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
  }

  export type PrestamoMaxAggregateInputType = {
    id_prestamo?: true
    id_equipo?: true
    id_usuario?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
  }

  export type PrestamoCountAggregateInputType = {
    id_prestamo?: true
    id_equipo?: true
    id_usuario?: true
    fecha_prestamo?: true
    fecha_devolucion?: true
    estado?: true
    _all?: true
  }

  export type PrestamoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamo to aggregate.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestamos
    **/
    _count?: true | PrestamoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamoMaxAggregateInputType
  }

  export type GetPrestamoAggregateType<T extends PrestamoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamo[P]>
      : GetScalarType<T[P], AggregatePrestamo[P]>
  }




  export type PrestamoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamoWhereInput
    orderBy?: PrestamoOrderByWithAggregationInput | PrestamoOrderByWithAggregationInput[]
    by: PrestamoScalarFieldEnum[] | PrestamoScalarFieldEnum
    having?: PrestamoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamoCountAggregateInputType | true
    _avg?: PrestamoAvgAggregateInputType
    _sum?: PrestamoSumAggregateInputType
    _min?: PrestamoMinAggregateInputType
    _max?: PrestamoMaxAggregateInputType
  }

  export type PrestamoGroupByOutputType = {
    id_prestamo: number
    id_equipo: number
    id_usuario: number
    fecha_prestamo: Date
    fecha_devolucion: Date
    estado: string
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  type GetPrestamoGroupByPayload<T extends PrestamoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
        }
      >
    >


  export type PrestamoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_equipo?: boolean
    id_usuario?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_equipo?: boolean
    id_usuario?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_equipo?: boolean
    id_usuario?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type PrestamoSelectScalar = {
    id_prestamo?: boolean
    id_equipo?: boolean
    id_usuario?: boolean
    fecha_prestamo?: boolean
    fecha_devolucion?: boolean
    estado?: boolean
  }

  export type PrestamoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestamo" | "id_equipo" | "id_usuario" | "fecha_prestamo" | "fecha_devolucion" | "estado", ExtArgs["result"]["prestamo"]>
  export type PrestamoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestamoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PrestamoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PrestamoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestamo"
    objects: {
      equipo: Prisma.$EquipoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      id_equipo: number
      id_usuario: number
      fecha_prestamo: Date
      fecha_devolucion: Date
      estado: string
    }, ExtArgs["result"]["prestamo"]>
    composites: {}
  }

  type PrestamoGetPayload<S extends boolean | null | undefined | PrestamoDefaultArgs> = $Result.GetResult<Prisma.$PrestamoPayload, S>

  type PrestamoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamoCountAggregateInputType | true
    }

  export interface PrestamoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestamo'], meta: { name: 'Prestamo' } }
    /**
     * Find zero or one Prestamo that matches the filter.
     * @param {PrestamoFindUniqueArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestamoFindUniqueArgs>(args: SelectSubset<T, PrestamoFindUniqueArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestamoFindUniqueOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestamoFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindFirstArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestamoFindFirstArgs>(args?: SelectSubset<T, PrestamoFindFirstArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindFirstOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestamoFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestamoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamo.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamo.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends PrestamoFindManyArgs>(args?: SelectSubset<T, PrestamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamo.
     * @param {PrestamoCreateArgs} args - Arguments to create a Prestamo.
     * @example
     * // Create one Prestamo
     * const Prestamo = await prisma.prestamo.create({
     *   data: {
     *     // ... data to create a Prestamo
     *   }
     * })
     * 
     */
    create<T extends PrestamoCreateArgs>(args: SelectSubset<T, PrestamoCreateArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {PrestamoCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestamoCreateManyArgs>(args?: SelectSubset<T, PrestamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamos and returns the data saved in the database.
     * @param {PrestamoCreateManyAndReturnArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamos and only return the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.createManyAndReturn({
     *   select: { id_prestamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestamoCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamo.
     * @param {PrestamoDeleteArgs} args - Arguments to delete one Prestamo.
     * @example
     * // Delete one Prestamo
     * const Prestamo = await prisma.prestamo.delete({
     *   where: {
     *     // ... filter to delete one Prestamo
     *   }
     * })
     * 
     */
    delete<T extends PrestamoDeleteArgs>(args: SelectSubset<T, PrestamoDeleteArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamo.
     * @param {PrestamoUpdateArgs} args - Arguments to update one Prestamo.
     * @example
     * // Update one Prestamo
     * const prestamo = await prisma.prestamo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestamoUpdateArgs>(args: SelectSubset<T, PrestamoUpdateArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {PrestamoDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestamoDeleteManyArgs>(args?: SelectSubset<T, PrestamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestamoUpdateManyArgs>(args: SelectSubset<T, PrestamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos and returns the data updated in the database.
     * @param {PrestamoUpdateManyAndReturnArgs} args - Arguments to update many Prestamos.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamos and only return the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.updateManyAndReturn({
     *   select: { id_prestamo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrestamoUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamo.
     * @param {PrestamoUpsertArgs} args - Arguments to update or create a Prestamo.
     * @example
     * // Update or create a Prestamo
     * const prestamo = await prisma.prestamo.upsert({
     *   create: {
     *     // ... data to create a Prestamo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamo we want to update
     *   }
     * })
     */
    upsert<T extends PrestamoUpsertArgs>(args: SelectSubset<T, PrestamoUpsertArgs<ExtArgs>>): Prisma__PrestamoClient<$Result.GetResult<Prisma.$PrestamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamo.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends PrestamoCountArgs>(
      args?: Subset<T, PrestamoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestamoAggregateArgs>(args: Subset<T, PrestamoAggregateArgs>): Prisma.PrismaPromise<GetPrestamoAggregateType<T>>

    /**
     * Group by Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrestamoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestamoGroupByArgs['orderBy'] }
        : { orderBy?: PrestamoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrestamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestamo model
   */
  readonly fields: PrestamoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestamo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestamoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipo<T extends EquipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipoDefaultArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prestamo model
   */
  interface PrestamoFieldRefs {
    readonly id_prestamo: FieldRef<"Prestamo", 'Int'>
    readonly id_equipo: FieldRef<"Prestamo", 'Int'>
    readonly id_usuario: FieldRef<"Prestamo", 'Int'>
    readonly fecha_prestamo: FieldRef<"Prestamo", 'DateTime'>
    readonly fecha_devolucion: FieldRef<"Prestamo", 'DateTime'>
    readonly estado: FieldRef<"Prestamo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prestamo findUnique
   */
  export type PrestamoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo findUniqueOrThrow
   */
  export type PrestamoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo findFirst
   */
  export type PrestamoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo findFirstOrThrow
   */
  export type PrestamoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamo to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo findMany
   */
  export type PrestamoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where?: PrestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamoOrderByWithRelationInput | PrestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestamos.
     */
    cursor?: PrestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * Prestamo create
   */
  export type PrestamoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The data needed to create a Prestamo.
     */
    data: XOR<PrestamoCreateInput, PrestamoUncheckedCreateInput>
  }

  /**
   * Prestamo createMany
   */
  export type PrestamoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamoCreateManyInput | PrestamoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestamo createManyAndReturn
   */
  export type PrestamoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamoCreateManyInput | PrestamoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamo update
   */
  export type PrestamoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The data needed to update a Prestamo.
     */
    data: XOR<PrestamoUpdateInput, PrestamoUncheckedUpdateInput>
    /**
     * Choose, which Prestamo to update.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo updateMany
   */
  export type PrestamoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
  }

  /**
   * Prestamo updateManyAndReturn
   */
  export type PrestamoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamo upsert
   */
  export type PrestamoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * The filter to search for the Prestamo to update in case it exists.
     */
    where: PrestamoWhereUniqueInput
    /**
     * In case the Prestamo found by the `where` argument doesn't exist, create a new Prestamo with this data.
     */
    create: XOR<PrestamoCreateInput, PrestamoUncheckedCreateInput>
    /**
     * In case the Prestamo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestamoUpdateInput, PrestamoUncheckedUpdateInput>
  }

  /**
   * Prestamo delete
   */
  export type PrestamoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
    /**
     * Filter which Prestamo to delete.
     */
    where: PrestamoWhereUniqueInput
  }

  /**
   * Prestamo deleteMany
   */
  export type PrestamoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamos to delete
     */
    where?: PrestamoWhereInput
    /**
     * Limit how many Prestamos to delete.
     */
    limit?: number
  }

  /**
   * Prestamo without action
   */
  export type PrestamoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamo
     */
    select?: PrestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamo
     */
    omit?: PrestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EquipoScalarFieldEnum: {
    id_equipo: 'id_equipo',
    nombre_equipo: 'nombre_equipo',
    tipo_equipo: 'tipo_equipo',
    marca: 'marca',
    modelo: 'modelo',
    numero_serie: 'numero_serie',
    sistema_operativo: 'sistema_operativo',
    procesador: 'procesador',
    ram: 'ram',
    disco_duro: 'disco_duro',
    fecha_compra: 'fecha_compra',
    estado: 'estado',
    id_ubicacion: 'id_ubicacion',
    id_usuario: 'id_usuario'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


  export const UbicacionScalarFieldEnum: {
    id_ubicacion: 'id_ubicacion',
    edificio: 'edificio',
    piso: 'piso',
    oficina: 'oficina'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    correo: 'correo',
    departamento: 'departamento',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MantenimientoScalarFieldEnum: {
    id_mantenimiento: 'id_mantenimiento',
    id_equipo: 'id_equipo',
    tipo: 'tipo',
    descripcion: 'descripcion',
    fecha: 'fecha',
    tecnico: 'tecnico'
  };

  export type MantenimientoScalarFieldEnum = (typeof MantenimientoScalarFieldEnum)[keyof typeof MantenimientoScalarFieldEnum]


  export const PrestamoScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    id_equipo: 'id_equipo',
    id_usuario: 'id_usuario',
    fecha_prestamo: 'fecha_prestamo',
    fecha_devolucion: 'fecha_devolucion',
    estado: 'estado'
  };

  export type PrestamoScalarFieldEnum = (typeof PrestamoScalarFieldEnum)[keyof typeof PrestamoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EquipoWhereInput = {
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    id_equipo?: IntFilter<"Equipo"> | number
    nombre_equipo?: StringFilter<"Equipo"> | string
    tipo_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    numero_serie?: StringFilter<"Equipo"> | string
    sistema_operativo?: StringFilter<"Equipo"> | string
    procesador?: StringFilter<"Equipo"> | string
    ram?: StringFilter<"Equipo"> | string
    disco_duro?: StringFilter<"Equipo"> | string
    fecha_compra?: DateTimeFilter<"Equipo"> | Date | string
    estado?: StringFilter<"Equipo"> | string
    id_ubicacion?: IntFilter<"Equipo"> | number
    id_usuario?: IntFilter<"Equipo"> | number
    ubicacion?: XOR<UbicacionScalarRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mantenimientos?: MantenimientoListRelationFilter
    prestamos?: PrestamoListRelationFilter
  }

  export type EquipoOrderByWithRelationInput = {
    id_equipo?: SortOrder
    nombre_equipo?: SortOrder
    tipo_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    sistema_operativo?: SortOrder
    procesador?: SortOrder
    ram?: SortOrder
    disco_duro?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    ubicacion?: UbicacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    mantenimientos?: MantenimientoOrderByRelationAggregateInput
    prestamos?: PrestamoOrderByRelationAggregateInput
  }

  export type EquipoWhereUniqueInput = Prisma.AtLeast<{
    id_equipo?: number
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    nombre_equipo?: StringFilter<"Equipo"> | string
    tipo_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    numero_serie?: StringFilter<"Equipo"> | string
    sistema_operativo?: StringFilter<"Equipo"> | string
    procesador?: StringFilter<"Equipo"> | string
    ram?: StringFilter<"Equipo"> | string
    disco_duro?: StringFilter<"Equipo"> | string
    fecha_compra?: DateTimeFilter<"Equipo"> | Date | string
    estado?: StringFilter<"Equipo"> | string
    id_ubicacion?: IntFilter<"Equipo"> | number
    id_usuario?: IntFilter<"Equipo"> | number
    ubicacion?: XOR<UbicacionScalarRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mantenimientos?: MantenimientoListRelationFilter
    prestamos?: PrestamoListRelationFilter
  }, "id_equipo">

  export type EquipoOrderByWithAggregationInput = {
    id_equipo?: SortOrder
    nombre_equipo?: SortOrder
    tipo_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    sistema_operativo?: SortOrder
    procesador?: SortOrder
    ram?: SortOrder
    disco_duro?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
    _count?: EquipoCountOrderByAggregateInput
    _avg?: EquipoAvgOrderByAggregateInput
    _max?: EquipoMaxOrderByAggregateInput
    _min?: EquipoMinOrderByAggregateInput
    _sum?: EquipoSumOrderByAggregateInput
  }

  export type EquipoScalarWhereWithAggregatesInput = {
    AND?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    OR?: EquipoScalarWhereWithAggregatesInput[]
    NOT?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    id_equipo?: IntWithAggregatesFilter<"Equipo"> | number
    nombre_equipo?: StringWithAggregatesFilter<"Equipo"> | string
    tipo_equipo?: StringWithAggregatesFilter<"Equipo"> | string
    marca?: StringWithAggregatesFilter<"Equipo"> | string
    modelo?: StringWithAggregatesFilter<"Equipo"> | string
    numero_serie?: StringWithAggregatesFilter<"Equipo"> | string
    sistema_operativo?: StringWithAggregatesFilter<"Equipo"> | string
    procesador?: StringWithAggregatesFilter<"Equipo"> | string
    ram?: StringWithAggregatesFilter<"Equipo"> | string
    disco_duro?: StringWithAggregatesFilter<"Equipo"> | string
    fecha_compra?: DateTimeWithAggregatesFilter<"Equipo"> | Date | string
    estado?: StringWithAggregatesFilter<"Equipo"> | string
    id_ubicacion?: IntWithAggregatesFilter<"Equipo"> | number
    id_usuario?: IntWithAggregatesFilter<"Equipo"> | number
  }

  export type UbicacionWhereInput = {
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    id_ubicacion?: IntFilter<"Ubicacion"> | number
    edificio?: StringFilter<"Ubicacion"> | string
    piso?: StringFilter<"Ubicacion"> | string
    oficina?: StringFilter<"Ubicacion"> | string
    equipos?: EquipoListRelationFilter
  }

  export type UbicacionOrderByWithRelationInput = {
    id_ubicacion?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    oficina?: SortOrder
    equipos?: EquipoOrderByRelationAggregateInput
  }

  export type UbicacionWhereUniqueInput = Prisma.AtLeast<{
    id_ubicacion?: number
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    edificio?: StringFilter<"Ubicacion"> | string
    piso?: StringFilter<"Ubicacion"> | string
    oficina?: StringFilter<"Ubicacion"> | string
    equipos?: EquipoListRelationFilter
  }, "id_ubicacion">

  export type UbicacionOrderByWithAggregationInput = {
    id_ubicacion?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    oficina?: SortOrder
    _count?: UbicacionCountOrderByAggregateInput
    _avg?: UbicacionAvgOrderByAggregateInput
    _max?: UbicacionMaxOrderByAggregateInput
    _min?: UbicacionMinOrderByAggregateInput
    _sum?: UbicacionSumOrderByAggregateInput
  }

  export type UbicacionScalarWhereWithAggregatesInput = {
    AND?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    OR?: UbicacionScalarWhereWithAggregatesInput[]
    NOT?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    id_ubicacion?: IntWithAggregatesFilter<"Ubicacion"> | number
    edificio?: StringWithAggregatesFilter<"Ubicacion"> | string
    piso?: StringWithAggregatesFilter<"Ubicacion"> | string
    oficina?: StringWithAggregatesFilter<"Ubicacion"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    departamento?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    equipos?: EquipoListRelationFilter
    prestamos?: PrestamoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    departamento?: SortOrder
    rol?: SortOrder
    equipos?: EquipoOrderByRelationAggregateInput
    prestamos?: PrestamoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    departamento?: StringFilter<"Usuario"> | string
    rol?: StringFilter<"Usuario"> | string
    equipos?: EquipoListRelationFilter
    prestamos?: PrestamoListRelationFilter
  }, "id_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    departamento?: SortOrder
    rol?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    departamento?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type MantenimientoWhereInput = {
    AND?: MantenimientoWhereInput | MantenimientoWhereInput[]
    OR?: MantenimientoWhereInput[]
    NOT?: MantenimientoWhereInput | MantenimientoWhereInput[]
    id_mantenimiento?: IntFilter<"Mantenimiento"> | number
    id_equipo?: IntFilter<"Mantenimiento"> | number
    tipo?: StringFilter<"Mantenimiento"> | string
    descripcion?: StringFilter<"Mantenimiento"> | string
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    tecnico?: StringFilter<"Mantenimiento"> | string
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
  }

  export type MantenimientoOrderByWithRelationInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    tecnico?: SortOrder
    equipo?: EquipoOrderByWithRelationInput
  }

  export type MantenimientoWhereUniqueInput = Prisma.AtLeast<{
    id_mantenimiento?: number
    AND?: MantenimientoWhereInput | MantenimientoWhereInput[]
    OR?: MantenimientoWhereInput[]
    NOT?: MantenimientoWhereInput | MantenimientoWhereInput[]
    id_equipo?: IntFilter<"Mantenimiento"> | number
    tipo?: StringFilter<"Mantenimiento"> | string
    descripcion?: StringFilter<"Mantenimiento"> | string
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    tecnico?: StringFilter<"Mantenimiento"> | string
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
  }, "id_mantenimiento">

  export type MantenimientoOrderByWithAggregationInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    tecnico?: SortOrder
    _count?: MantenimientoCountOrderByAggregateInput
    _avg?: MantenimientoAvgOrderByAggregateInput
    _max?: MantenimientoMaxOrderByAggregateInput
    _min?: MantenimientoMinOrderByAggregateInput
    _sum?: MantenimientoSumOrderByAggregateInput
  }

  export type MantenimientoScalarWhereWithAggregatesInput = {
    AND?: MantenimientoScalarWhereWithAggregatesInput | MantenimientoScalarWhereWithAggregatesInput[]
    OR?: MantenimientoScalarWhereWithAggregatesInput[]
    NOT?: MantenimientoScalarWhereWithAggregatesInput | MantenimientoScalarWhereWithAggregatesInput[]
    id_mantenimiento?: IntWithAggregatesFilter<"Mantenimiento"> | number
    id_equipo?: IntWithAggregatesFilter<"Mantenimiento"> | number
    tipo?: StringWithAggregatesFilter<"Mantenimiento"> | string
    descripcion?: StringWithAggregatesFilter<"Mantenimiento"> | string
    fecha?: DateTimeWithAggregatesFilter<"Mantenimiento"> | Date | string
    tecnico?: StringWithAggregatesFilter<"Mantenimiento"> | string
  }

  export type PrestamoWhereInput = {
    AND?: PrestamoWhereInput | PrestamoWhereInput[]
    OR?: PrestamoWhereInput[]
    NOT?: PrestamoWhereInput | PrestamoWhereInput[]
    id_prestamo?: IntFilter<"Prestamo"> | number
    id_equipo?: IntFilter<"Prestamo"> | number
    id_usuario?: IntFilter<"Prestamo"> | number
    fecha_prestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fecha_devolucion?: DateTimeFilter<"Prestamo"> | Date | string
    estado?: StringFilter<"Prestamo"> | string
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PrestamoOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
    equipo?: EquipoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PrestamoWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: PrestamoWhereInput | PrestamoWhereInput[]
    OR?: PrestamoWhereInput[]
    NOT?: PrestamoWhereInput | PrestamoWhereInput[]
    id_equipo?: IntFilter<"Prestamo"> | number
    id_usuario?: IntFilter<"Prestamo"> | number
    fecha_prestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fecha_devolucion?: DateTimeFilter<"Prestamo"> | Date | string
    estado?: StringFilter<"Prestamo"> | string
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_prestamo">

  export type PrestamoOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
    _count?: PrestamoCountOrderByAggregateInput
    _avg?: PrestamoAvgOrderByAggregateInput
    _max?: PrestamoMaxOrderByAggregateInput
    _min?: PrestamoMinOrderByAggregateInput
    _sum?: PrestamoSumOrderByAggregateInput
  }

  export type PrestamoScalarWhereWithAggregatesInput = {
    AND?: PrestamoScalarWhereWithAggregatesInput | PrestamoScalarWhereWithAggregatesInput[]
    OR?: PrestamoScalarWhereWithAggregatesInput[]
    NOT?: PrestamoScalarWhereWithAggregatesInput | PrestamoScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"Prestamo"> | number
    id_equipo?: IntWithAggregatesFilter<"Prestamo"> | number
    id_usuario?: IntWithAggregatesFilter<"Prestamo"> | number
    fecha_prestamo?: DateTimeWithAggregatesFilter<"Prestamo"> | Date | string
    fecha_devolucion?: DateTimeWithAggregatesFilter<"Prestamo"> | Date | string
    estado?: StringWithAggregatesFilter<"Prestamo"> | string
  }

  export type EquipoCreateInput = {
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    ubicacion: UbicacionCreateNestedOneWithoutEquiposInput
    usuario: UsuarioCreateNestedOneWithoutEquiposInput
    mantenimientos?: MantenimientoCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
    id_usuario: number
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUpdateInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutEquiposNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutEquiposNestedInput
    mantenimientos?: MantenimientoUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoCreateManyInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
    id_usuario: number
  }

  export type EquipoUpdateManyMutationInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoUncheckedUpdateManyInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionCreateInput = {
    edificio: string
    piso: string
    oficina: string
    equipos?: EquipoCreateNestedManyWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateInput = {
    id_ubicacion?: number
    edificio: string
    piso: string
    oficina: string
    equipos?: EquipoUncheckedCreateNestedManyWithoutUbicacionInput
  }

  export type UbicacionUpdateInput = {
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUpdateManyWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUncheckedUpdateManyWithoutUbicacionNestedInput
  }

  export type UbicacionCreateManyInput = {
    id_ubicacion?: number
    edificio: string
    piso: string
    oficina: string
  }

  export type UbicacionUpdateManyMutationInput = {
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionUncheckedUpdateManyInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    departamento: string
    rol: string
    equipos?: EquipoCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    correo: string
    departamento: string
    rol: string
    equipos?: EquipoUncheckedCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    correo: string
    departamento: string
    rol: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type MantenimientoCreateInput = {
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
    equipo: EquipoCreateNestedOneWithoutMantenimientosInput
  }

  export type MantenimientoUncheckedCreateInput = {
    id_mantenimiento?: number
    id_equipo: number
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
  }

  export type MantenimientoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
    equipo?: EquipoUpdateOneRequiredWithoutMantenimientosNestedInput
  }

  export type MantenimientoUncheckedUpdateInput = {
    id_mantenimiento?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type MantenimientoCreateManyInput = {
    id_mantenimiento?: number
    id_equipo: number
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
  }

  export type MantenimientoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type MantenimientoUncheckedUpdateManyInput = {
    id_mantenimiento?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoCreateInput = {
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
    equipo: EquipoCreateNestedOneWithoutPrestamosInput
    usuario: UsuarioCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateInput = {
    id_prestamo?: number
    id_equipo: number
    id_usuario: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type PrestamoUpdateInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    equipo?: EquipoUpdateOneRequiredWithoutPrestamosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoCreateManyInput = {
    id_prestamo?: number
    id_equipo: number
    id_usuario: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type PrestamoUpdateManyMutationInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UbicacionScalarRelationFilter = {
    is?: UbicacionWhereInput
    isNot?: UbicacionWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MantenimientoListRelationFilter = {
    every?: MantenimientoWhereInput
    some?: MantenimientoWhereInput
    none?: MantenimientoWhereInput
  }

  export type PrestamoListRelationFilter = {
    every?: PrestamoWhereInput
    some?: PrestamoWhereInput
    none?: PrestamoWhereInput
  }

  export type MantenimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrestamoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipoCountOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre_equipo?: SortOrder
    tipo_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    sistema_operativo?: SortOrder
    procesador?: SortOrder
    ram?: SortOrder
    disco_duro?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type EquipoAvgOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type EquipoMaxOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre_equipo?: SortOrder
    tipo_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    sistema_operativo?: SortOrder
    procesador?: SortOrder
    ram?: SortOrder
    disco_duro?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type EquipoMinOrderByAggregateInput = {
    id_equipo?: SortOrder
    nombre_equipo?: SortOrder
    tipo_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    sistema_operativo?: SortOrder
    procesador?: SortOrder
    ram?: SortOrder
    disco_duro?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type EquipoSumOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_ubicacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EquipoListRelationFilter = {
    every?: EquipoWhereInput
    some?: EquipoWhereInput
    none?: EquipoWhereInput
  }

  export type EquipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UbicacionCountOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    oficina?: SortOrder
  }

  export type UbicacionAvgOrderByAggregateInput = {
    id_ubicacion?: SortOrder
  }

  export type UbicacionMaxOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    oficina?: SortOrder
  }

  export type UbicacionMinOrderByAggregateInput = {
    id_ubicacion?: SortOrder
    edificio?: SortOrder
    piso?: SortOrder
    oficina?: SortOrder
  }

  export type UbicacionSumOrderByAggregateInput = {
    id_ubicacion?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    departamento?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    departamento?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    departamento?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type EquipoScalarRelationFilter = {
    is?: EquipoWhereInput
    isNot?: EquipoWhereInput
  }

  export type MantenimientoCountOrderByAggregateInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    tecnico?: SortOrder
  }

  export type MantenimientoAvgOrderByAggregateInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
  }

  export type MantenimientoMaxOrderByAggregateInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    tecnico?: SortOrder
  }

  export type MantenimientoMinOrderByAggregateInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    tecnico?: SortOrder
  }

  export type MantenimientoSumOrderByAggregateInput = {
    id_mantenimiento?: SortOrder
    id_equipo?: SortOrder
  }

  export type PrestamoCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type PrestamoAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type PrestamoMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type PrestamoMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_devolucion?: SortOrder
    estado?: SortOrder
  }

  export type PrestamoSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_equipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type UbicacionCreateNestedOneWithoutEquiposInput = {
    create?: XOR<UbicacionCreateWithoutEquiposInput, UbicacionUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutEquiposInput
    connect?: UbicacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutEquiposInput = {
    create?: XOR<UsuarioCreateWithoutEquiposInput, UsuarioUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEquiposInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MantenimientoCreateNestedManyWithoutEquipoInput = {
    create?: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput> | MantenimientoCreateWithoutEquipoInput[] | MantenimientoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutEquipoInput | MantenimientoCreateOrConnectWithoutEquipoInput[]
    createMany?: MantenimientoCreateManyEquipoInputEnvelope
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
  }

  export type PrestamoCreateNestedManyWithoutEquipoInput = {
    create?: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput> | PrestamoCreateWithoutEquipoInput[] | PrestamoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutEquipoInput | PrestamoCreateOrConnectWithoutEquipoInput[]
    createMany?: PrestamoCreateManyEquipoInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type MantenimientoUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput> | MantenimientoCreateWithoutEquipoInput[] | MantenimientoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutEquipoInput | MantenimientoCreateOrConnectWithoutEquipoInput[]
    createMany?: MantenimientoCreateManyEquipoInputEnvelope
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
  }

  export type PrestamoUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput> | PrestamoCreateWithoutEquipoInput[] | PrestamoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutEquipoInput | PrestamoCreateOrConnectWithoutEquipoInput[]
    createMany?: PrestamoCreateManyEquipoInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UbicacionUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<UbicacionCreateWithoutEquiposInput, UbicacionUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutEquiposInput
    upsert?: UbicacionUpsertWithoutEquiposInput
    connect?: UbicacionWhereUniqueInput
    update?: XOR<XOR<UbicacionUpdateToOneWithWhereWithoutEquiposInput, UbicacionUpdateWithoutEquiposInput>, UbicacionUncheckedUpdateWithoutEquiposInput>
  }

  export type UsuarioUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<UsuarioCreateWithoutEquiposInput, UsuarioUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEquiposInput
    upsert?: UsuarioUpsertWithoutEquiposInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEquiposInput, UsuarioUpdateWithoutEquiposInput>, UsuarioUncheckedUpdateWithoutEquiposInput>
  }

  export type MantenimientoUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput> | MantenimientoCreateWithoutEquipoInput[] | MantenimientoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutEquipoInput | MantenimientoCreateOrConnectWithoutEquipoInput[]
    upsert?: MantenimientoUpsertWithWhereUniqueWithoutEquipoInput | MantenimientoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: MantenimientoCreateManyEquipoInputEnvelope
    set?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    disconnect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    delete?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    update?: MantenimientoUpdateWithWhereUniqueWithoutEquipoInput | MantenimientoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: MantenimientoUpdateManyWithWhereWithoutEquipoInput | MantenimientoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
  }

  export type PrestamoUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput> | PrestamoCreateWithoutEquipoInput[] | PrestamoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutEquipoInput | PrestamoCreateOrConnectWithoutEquipoInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutEquipoInput | PrestamoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: PrestamoCreateManyEquipoInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutEquipoInput | PrestamoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutEquipoInput | PrestamoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MantenimientoUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput> | MantenimientoCreateWithoutEquipoInput[] | MantenimientoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutEquipoInput | MantenimientoCreateOrConnectWithoutEquipoInput[]
    upsert?: MantenimientoUpsertWithWhereUniqueWithoutEquipoInput | MantenimientoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: MantenimientoCreateManyEquipoInputEnvelope
    set?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    disconnect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    delete?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    update?: MantenimientoUpdateWithWhereUniqueWithoutEquipoInput | MantenimientoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: MantenimientoUpdateManyWithWhereWithoutEquipoInput | MantenimientoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
  }

  export type PrestamoUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput> | PrestamoCreateWithoutEquipoInput[] | PrestamoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutEquipoInput | PrestamoCreateOrConnectWithoutEquipoInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutEquipoInput | PrestamoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: PrestamoCreateManyEquipoInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutEquipoInput | PrestamoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutEquipoInput | PrestamoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type EquipoCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput> | EquipoCreateWithoutUbicacionInput[] | EquipoUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUbicacionInput | EquipoCreateOrConnectWithoutUbicacionInput[]
    createMany?: EquipoCreateManyUbicacionInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type EquipoUncheckedCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput> | EquipoCreateWithoutUbicacionInput[] | EquipoUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUbicacionInput | EquipoCreateOrConnectWithoutUbicacionInput[]
    createMany?: EquipoCreateManyUbicacionInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type EquipoUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput> | EquipoCreateWithoutUbicacionInput[] | EquipoUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUbicacionInput | EquipoCreateOrConnectWithoutUbicacionInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutUbicacionInput | EquipoUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: EquipoCreateManyUbicacionInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutUbicacionInput | EquipoUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutUbicacionInput | EquipoUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type EquipoUncheckedUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput> | EquipoCreateWithoutUbicacionInput[] | EquipoUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUbicacionInput | EquipoCreateOrConnectWithoutUbicacionInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutUbicacionInput | EquipoUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: EquipoCreateManyUbicacionInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutUbicacionInput | EquipoUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutUbicacionInput | EquipoUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type EquipoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput> | EquipoCreateWithoutUsuarioInput[] | EquipoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUsuarioInput | EquipoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EquipoCreateManyUsuarioInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type PrestamoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type EquipoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput> | EquipoCreateWithoutUsuarioInput[] | EquipoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUsuarioInput | EquipoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EquipoCreateManyUsuarioInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type PrestamoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
  }

  export type EquipoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput> | EquipoCreateWithoutUsuarioInput[] | EquipoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUsuarioInput | EquipoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutUsuarioInput | EquipoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EquipoCreateManyUsuarioInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutUsuarioInput | EquipoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutUsuarioInput | EquipoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type PrestamoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutUsuarioInput | PrestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutUsuarioInput | PrestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutUsuarioInput | PrestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type EquipoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput> | EquipoCreateWithoutUsuarioInput[] | EquipoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutUsuarioInput | EquipoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutUsuarioInput | EquipoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EquipoCreateManyUsuarioInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutUsuarioInput | EquipoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutUsuarioInput | EquipoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type PrestamoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput> | PrestamoCreateWithoutUsuarioInput[] | PrestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamoCreateOrConnectWithoutUsuarioInput | PrestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamoUpsertWithWhereUniqueWithoutUsuarioInput | PrestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamoCreateManyUsuarioInputEnvelope
    set?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    disconnect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    delete?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    connect?: PrestamoWhereUniqueInput | PrestamoWhereUniqueInput[]
    update?: PrestamoUpdateWithWhereUniqueWithoutUsuarioInput | PrestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamoUpdateManyWithWhereWithoutUsuarioInput | PrestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
  }

  export type EquipoCreateNestedOneWithoutMantenimientosInput = {
    create?: XOR<EquipoCreateWithoutMantenimientosInput, EquipoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutMantenimientosInput
    connect?: EquipoWhereUniqueInput
  }

  export type EquipoUpdateOneRequiredWithoutMantenimientosNestedInput = {
    create?: XOR<EquipoCreateWithoutMantenimientosInput, EquipoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutMantenimientosInput
    upsert?: EquipoUpsertWithoutMantenimientosInput
    connect?: EquipoWhereUniqueInput
    update?: XOR<XOR<EquipoUpdateToOneWithWhereWithoutMantenimientosInput, EquipoUpdateWithoutMantenimientosInput>, EquipoUncheckedUpdateWithoutMantenimientosInput>
  }

  export type EquipoCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<EquipoCreateWithoutPrestamosInput, EquipoUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPrestamosInput
    connect?: EquipoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPrestamosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EquipoUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<EquipoCreateWithoutPrestamosInput, EquipoUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutPrestamosInput
    upsert?: EquipoUpsertWithoutPrestamosInput
    connect?: EquipoWhereUniqueInput
    update?: XOR<XOR<EquipoUpdateToOneWithWhereWithoutPrestamosInput, EquipoUpdateWithoutPrestamosInput>, EquipoUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPrestamosInput
    upsert?: UsuarioUpsertWithoutPrestamosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPrestamosInput, UsuarioUpdateWithoutPrestamosInput>, UsuarioUncheckedUpdateWithoutPrestamosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UbicacionCreateWithoutEquiposInput = {
    edificio: string
    piso: string
    oficina: string
  }

  export type UbicacionUncheckedCreateWithoutEquiposInput = {
    id_ubicacion?: number
    edificio: string
    piso: string
    oficina: string
  }

  export type UbicacionCreateOrConnectWithoutEquiposInput = {
    where: UbicacionWhereUniqueInput
    create: XOR<UbicacionCreateWithoutEquiposInput, UbicacionUncheckedCreateWithoutEquiposInput>
  }

  export type UsuarioCreateWithoutEquiposInput = {
    nombre: string
    correo: string
    departamento: string
    rol: string
    prestamos?: PrestamoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEquiposInput = {
    id_usuario?: number
    nombre: string
    correo: string
    departamento: string
    rol: string
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEquiposInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEquiposInput, UsuarioUncheckedCreateWithoutEquiposInput>
  }

  export type MantenimientoCreateWithoutEquipoInput = {
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
  }

  export type MantenimientoUncheckedCreateWithoutEquipoInput = {
    id_mantenimiento?: number
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
  }

  export type MantenimientoCreateOrConnectWithoutEquipoInput = {
    where: MantenimientoWhereUniqueInput
    create: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput>
  }

  export type MantenimientoCreateManyEquipoInputEnvelope = {
    data: MantenimientoCreateManyEquipoInput | MantenimientoCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type PrestamoCreateWithoutEquipoInput = {
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateWithoutEquipoInput = {
    id_prestamo?: number
    id_usuario: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type PrestamoCreateOrConnectWithoutEquipoInput = {
    where: PrestamoWhereUniqueInput
    create: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput>
  }

  export type PrestamoCreateManyEquipoInputEnvelope = {
    data: PrestamoCreateManyEquipoInput | PrestamoCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type UbicacionUpsertWithoutEquiposInput = {
    update: XOR<UbicacionUpdateWithoutEquiposInput, UbicacionUncheckedUpdateWithoutEquiposInput>
    create: XOR<UbicacionCreateWithoutEquiposInput, UbicacionUncheckedCreateWithoutEquiposInput>
    where?: UbicacionWhereInput
  }

  export type UbicacionUpdateToOneWithWhereWithoutEquiposInput = {
    where?: UbicacionWhereInput
    data: XOR<UbicacionUpdateWithoutEquiposInput, UbicacionUncheckedUpdateWithoutEquiposInput>
  }

  export type UbicacionUpdateWithoutEquiposInput = {
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionUncheckedUpdateWithoutEquiposInput = {
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    edificio?: StringFieldUpdateOperationsInput | string
    piso?: StringFieldUpdateOperationsInput | string
    oficina?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutEquiposInput = {
    update: XOR<UsuarioUpdateWithoutEquiposInput, UsuarioUncheckedUpdateWithoutEquiposInput>
    create: XOR<UsuarioCreateWithoutEquiposInput, UsuarioUncheckedCreateWithoutEquiposInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEquiposInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEquiposInput, UsuarioUncheckedUpdateWithoutEquiposInput>
  }

  export type UsuarioUpdateWithoutEquiposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    prestamos?: PrestamoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEquiposInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    prestamos?: PrestamoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MantenimientoUpsertWithWhereUniqueWithoutEquipoInput = {
    where: MantenimientoWhereUniqueInput
    update: XOR<MantenimientoUpdateWithoutEquipoInput, MantenimientoUncheckedUpdateWithoutEquipoInput>
    create: XOR<MantenimientoCreateWithoutEquipoInput, MantenimientoUncheckedCreateWithoutEquipoInput>
  }

  export type MantenimientoUpdateWithWhereUniqueWithoutEquipoInput = {
    where: MantenimientoWhereUniqueInput
    data: XOR<MantenimientoUpdateWithoutEquipoInput, MantenimientoUncheckedUpdateWithoutEquipoInput>
  }

  export type MantenimientoUpdateManyWithWhereWithoutEquipoInput = {
    where: MantenimientoScalarWhereInput
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyWithoutEquipoInput>
  }

  export type MantenimientoScalarWhereInput = {
    AND?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
    OR?: MantenimientoScalarWhereInput[]
    NOT?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
    id_mantenimiento?: IntFilter<"Mantenimiento"> | number
    id_equipo?: IntFilter<"Mantenimiento"> | number
    tipo?: StringFilter<"Mantenimiento"> | string
    descripcion?: StringFilter<"Mantenimiento"> | string
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    tecnico?: StringFilter<"Mantenimiento"> | string
  }

  export type PrestamoUpsertWithWhereUniqueWithoutEquipoInput = {
    where: PrestamoWhereUniqueInput
    update: XOR<PrestamoUpdateWithoutEquipoInput, PrestamoUncheckedUpdateWithoutEquipoInput>
    create: XOR<PrestamoCreateWithoutEquipoInput, PrestamoUncheckedCreateWithoutEquipoInput>
  }

  export type PrestamoUpdateWithWhereUniqueWithoutEquipoInput = {
    where: PrestamoWhereUniqueInput
    data: XOR<PrestamoUpdateWithoutEquipoInput, PrestamoUncheckedUpdateWithoutEquipoInput>
  }

  export type PrestamoUpdateManyWithWhereWithoutEquipoInput = {
    where: PrestamoScalarWhereInput
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyWithoutEquipoInput>
  }

  export type PrestamoScalarWhereInput = {
    AND?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
    OR?: PrestamoScalarWhereInput[]
    NOT?: PrestamoScalarWhereInput | PrestamoScalarWhereInput[]
    id_prestamo?: IntFilter<"Prestamo"> | number
    id_equipo?: IntFilter<"Prestamo"> | number
    id_usuario?: IntFilter<"Prestamo"> | number
    fecha_prestamo?: DateTimeFilter<"Prestamo"> | Date | string
    fecha_devolucion?: DateTimeFilter<"Prestamo"> | Date | string
    estado?: StringFilter<"Prestamo"> | string
  }

  export type EquipoCreateWithoutUbicacionInput = {
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutEquiposInput
    mantenimientos?: MantenimientoCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateWithoutUbicacionInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_usuario: number
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoCreateOrConnectWithoutUbicacionInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput>
  }

  export type EquipoCreateManyUbicacionInputEnvelope = {
    data: EquipoCreateManyUbicacionInput | EquipoCreateManyUbicacionInput[]
    skipDuplicates?: boolean
  }

  export type EquipoUpsertWithWhereUniqueWithoutUbicacionInput = {
    where: EquipoWhereUniqueInput
    update: XOR<EquipoUpdateWithoutUbicacionInput, EquipoUncheckedUpdateWithoutUbicacionInput>
    create: XOR<EquipoCreateWithoutUbicacionInput, EquipoUncheckedCreateWithoutUbicacionInput>
  }

  export type EquipoUpdateWithWhereUniqueWithoutUbicacionInput = {
    where: EquipoWhereUniqueInput
    data: XOR<EquipoUpdateWithoutUbicacionInput, EquipoUncheckedUpdateWithoutUbicacionInput>
  }

  export type EquipoUpdateManyWithWhereWithoutUbicacionInput = {
    where: EquipoScalarWhereInput
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyWithoutUbicacionInput>
  }

  export type EquipoScalarWhereInput = {
    AND?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    OR?: EquipoScalarWhereInput[]
    NOT?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    id_equipo?: IntFilter<"Equipo"> | number
    nombre_equipo?: StringFilter<"Equipo"> | string
    tipo_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    numero_serie?: StringFilter<"Equipo"> | string
    sistema_operativo?: StringFilter<"Equipo"> | string
    procesador?: StringFilter<"Equipo"> | string
    ram?: StringFilter<"Equipo"> | string
    disco_duro?: StringFilter<"Equipo"> | string
    fecha_compra?: DateTimeFilter<"Equipo"> | Date | string
    estado?: StringFilter<"Equipo"> | string
    id_ubicacion?: IntFilter<"Equipo"> | number
    id_usuario?: IntFilter<"Equipo"> | number
  }

  export type EquipoCreateWithoutUsuarioInput = {
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    ubicacion: UbicacionCreateNestedOneWithoutEquiposInput
    mantenimientos?: MantenimientoCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateWithoutUsuarioInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutEquipoInput
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoCreateOrConnectWithoutUsuarioInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput>
  }

  export type EquipoCreateManyUsuarioInputEnvelope = {
    data: EquipoCreateManyUsuarioInput | EquipoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PrestamoCreateWithoutUsuarioInput = {
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
    equipo: EquipoCreateNestedOneWithoutPrestamosInput
  }

  export type PrestamoUncheckedCreateWithoutUsuarioInput = {
    id_prestamo?: number
    id_equipo: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type PrestamoCreateOrConnectWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    create: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamoCreateManyUsuarioInputEnvelope = {
    data: PrestamoCreateManyUsuarioInput | PrestamoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EquipoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EquipoWhereUniqueInput
    update: XOR<EquipoUpdateWithoutUsuarioInput, EquipoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EquipoCreateWithoutUsuarioInput, EquipoUncheckedCreateWithoutUsuarioInput>
  }

  export type EquipoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EquipoWhereUniqueInput
    data: XOR<EquipoUpdateWithoutUsuarioInput, EquipoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EquipoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EquipoScalarWhereInput
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PrestamoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    update: XOR<PrestamoUpdateWithoutUsuarioInput, PrestamoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PrestamoCreateWithoutUsuarioInput, PrestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamoWhereUniqueInput
    data: XOR<PrestamoUpdateWithoutUsuarioInput, PrestamoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PrestamoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PrestamoScalarWhereInput
    data: XOR<PrestamoUpdateManyMutationInput, PrestamoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EquipoCreateWithoutMantenimientosInput = {
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    ubicacion: UbicacionCreateNestedOneWithoutEquiposInput
    usuario: UsuarioCreateNestedOneWithoutEquiposInput
    prestamos?: PrestamoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateWithoutMantenimientosInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
    id_usuario: number
    prestamos?: PrestamoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoCreateOrConnectWithoutMantenimientosInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutMantenimientosInput, EquipoUncheckedCreateWithoutMantenimientosInput>
  }

  export type EquipoUpsertWithoutMantenimientosInput = {
    update: XOR<EquipoUpdateWithoutMantenimientosInput, EquipoUncheckedUpdateWithoutMantenimientosInput>
    create: XOR<EquipoCreateWithoutMantenimientosInput, EquipoUncheckedCreateWithoutMantenimientosInput>
    where?: EquipoWhereInput
  }

  export type EquipoUpdateToOneWithWhereWithoutMantenimientosInput = {
    where?: EquipoWhereInput
    data: XOR<EquipoUpdateWithoutMantenimientosInput, EquipoUncheckedUpdateWithoutMantenimientosInput>
  }

  export type EquipoUpdateWithoutMantenimientosInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutEquiposNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutEquiposNestedInput
    prestamos?: PrestamoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateWithoutMantenimientosInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    prestamos?: PrestamoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoCreateWithoutPrestamosInput = {
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    ubicacion: UbicacionCreateNestedOneWithoutEquiposInput
    usuario: UsuarioCreateNestedOneWithoutEquiposInput
    mantenimientos?: MantenimientoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateWithoutPrestamosInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
    id_usuario: number
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoCreateOrConnectWithoutPrestamosInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutPrestamosInput, EquipoUncheckedCreateWithoutPrestamosInput>
  }

  export type UsuarioCreateWithoutPrestamosInput = {
    nombre: string
    correo: string
    departamento: string
    rol: string
    equipos?: EquipoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPrestamosInput = {
    id_usuario?: number
    nombre: string
    correo: string
    departamento: string
    rol: string
    equipos?: EquipoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPrestamosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
  }

  export type EquipoUpsertWithoutPrestamosInput = {
    update: XOR<EquipoUpdateWithoutPrestamosInput, EquipoUncheckedUpdateWithoutPrestamosInput>
    create: XOR<EquipoCreateWithoutPrestamosInput, EquipoUncheckedCreateWithoutPrestamosInput>
    where?: EquipoWhereInput
  }

  export type EquipoUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: EquipoWhereInput
    data: XOR<EquipoUpdateWithoutPrestamosInput, EquipoUncheckedUpdateWithoutPrestamosInput>
  }

  export type EquipoUpdateWithoutPrestamosInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutEquiposNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutEquiposNestedInput
    mantenimientos?: MantenimientoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateWithoutPrestamosInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type UsuarioUpsertWithoutPrestamosInput = {
    update: XOR<UsuarioUpdateWithoutPrestamosInput, UsuarioUncheckedUpdateWithoutPrestamosInput>
    create: XOR<UsuarioCreateWithoutPrestamosInput, UsuarioUncheckedCreateWithoutPrestamosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPrestamosInput, UsuarioUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuarioUpdateWithoutPrestamosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPrestamosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    equipos?: EquipoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MantenimientoCreateManyEquipoInput = {
    id_mantenimiento?: number
    tipo: string
    descripcion: string
    fecha: Date | string
    tecnico: string
  }

  export type PrestamoCreateManyEquipoInput = {
    id_prestamo?: number
    id_usuario: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type MantenimientoUpdateWithoutEquipoInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type MantenimientoUncheckedUpdateWithoutEquipoInput = {
    id_mantenimiento?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type MantenimientoUncheckedUpdateManyWithoutEquipoInput = {
    id_mantenimiento?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoUpdateWithoutEquipoInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateWithoutEquipoInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoUncheckedUpdateManyWithoutEquipoInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoCreateManyUbicacionInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_usuario: number
  }

  export type EquipoUpdateWithoutUbicacionInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEquiposNestedInput
    mantenimientos?: MantenimientoUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateWithoutUbicacionInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateManyWithoutUbicacionInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type EquipoCreateManyUsuarioInput = {
    id_equipo?: number
    nombre_equipo: string
    tipo_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    sistema_operativo: string
    procesador: string
    ram: string
    disco_duro: string
    fecha_compra: Date | string
    estado: string
    id_ubicacion: number
  }

  export type PrestamoCreateManyUsuarioInput = {
    id_prestamo?: number
    id_equipo: number
    fecha_prestamo: Date | string
    fecha_devolucion: Date | string
    estado: string
  }

  export type EquipoUpdateWithoutUsuarioInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutEquiposNestedInput
    mantenimientos?: MantenimientoUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateWithoutUsuarioInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutEquipoNestedInput
    prestamos?: PrestamoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateManyWithoutUsuarioInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    tipo_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    sistema_operativo?: StringFieldUpdateOperationsInput | string
    procesador?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    disco_duro?: StringFieldUpdateOperationsInput | string
    fecha_compra?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    id_ubicacion?: IntFieldUpdateOperationsInput | number
  }

  export type PrestamoUpdateWithoutUsuarioInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    equipo?: EquipoUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type PrestamoUncheckedUpdateWithoutUsuarioInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PrestamoUncheckedUpdateManyWithoutUsuarioInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_devolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}