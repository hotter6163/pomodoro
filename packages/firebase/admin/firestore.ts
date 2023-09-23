import { getFirestore } from "firebase-admin/firestore";
import { adminApp } from "./app";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";
import {
  UnknownKeysParam,
  ZodFirstPartyTypeKind,
  ZodObject,
  ZodRawShape,
  ZodTypeAny,
} from "zod";

export const adminFirestore = getFirestore(adminApp);

type Primitive = string | number | boolean | Date | null;
type RawData = {
  [key: string]: Primitive | Primitive[] | RawData | RawData[];
};
type Document = { id: string } & RawData;
export class ZodAdminConverter<
  T extends Document,
  Raw extends ZodRawShape = ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output extends Document = T,
> implements FirestoreDataConverter<T>
{
  constructor(
    private readonly schema: ZodObject<Raw, UnknownKeys, Catchall, Output, T>
  ) {}

  public fromFirestore(snapshot: QueryDocumentSnapshot): T {
    const data = this.convert(this.schema, {
      id: snapshot.id,
      ...snapshot.data(),
    });
    return data as unknown as T;
  }

  public toFirestore(modelObject: T): DocumentData {
    const result = this.schema.parse(modelObject);
    return result as DocumentData;
  }

  private convert(schema: ZodTypeAny, data: any) {
    if (schema._def.typeName === ZodFirstPartyTypeKind.ZodNullable)
      return data == null
        ? null
        : this.convertNoneNullable(schema._def.innerType, data);
    else return this.convertNoneNullable(schema, data);
  }

  private convertNoneNullable(schema: ZodTypeAny, data: any) {}
}

export * from "firebase-admin/firestore";
