import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import { app } from "./app";
import { isEmulator } from "./isEmulator";
import {
  UnknownKeysParam,
  ZodObjectDef,
  ZodRawShape,
  ZodType,
  ZodTypeAny,
  objectOutputType,
} from "zod";

export const firestore = getFirestore(app);

export class ZodConverter<
  T extends { id: string },
  Raw extends ZodRawShape = ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output = objectOutputType<Raw, Catchall, UnknownKeys>,
> implements FirestoreDataConverter<T>
{
  private readonly schema: ZodType<
    Output,
    ZodObjectDef<Raw, UnknownKeys, Catchall>,
    T
  >;

  constructor(
    schema: ZodType<Output, ZodObjectDef<Raw, UnknownKeys, Catchall>, T>
  ) {
    this.schema = schema;
  }

  public fromFirestore(snapshot: QueryDocumentSnapshot): T {
    return {} as T;
  }

  public toFirestore(modelObject: DocumentData): DocumentData {
    const result = this.schema.parse(modelObject);
    return result as DocumentData;
  }
}

if (isEmulator()) connectFirestoreEmulator(firestore, "localhost", 8080);

export * from "firebase/firestore";
