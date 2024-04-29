// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto/assembly";
import { StoreDelta } from "./StoreDelta";

export class InitialSnapshotData {
  static encode(message: InitialSnapshotData, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.moduleName);

    const deltas = message.deltas;
    for (let i: i32 = 0; i < deltas.length; ++i) {
      writer.uint32(18);
      writer.fork();
      StoreDelta.encode(deltas[i], writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.sentKeys);

    writer.uint32(24);
    writer.uint64(message.totalKeys);
  }

  static decode(reader: Reader, length: i32): InitialSnapshotData {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InitialSnapshotData();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;

        case 2:
          message.deltas.push(StoreDelta.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sentKeys = reader.uint64();
          break;

        case 3:
          message.totalKeys = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  moduleName: string;
  deltas: Array<StoreDelta>;
  sentKeys: u64;
  totalKeys: u64;

  constructor(
    moduleName: string = "",
    deltas: Array<StoreDelta> = [],
    sentKeys: u64 = 0,
    totalKeys: u64 = 0
  ) {
    this.moduleName = moduleName;
    this.deltas = deltas;
    this.sentKeys = sentKeys;
    this.totalKeys = totalKeys;
  }
}
