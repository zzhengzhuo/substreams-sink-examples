# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: sf/substreams/v1/clock.proto
# Protobuf Python Version: 5.28.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    2,
    '',
    'sf/substreams/v1/clock.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1csf/substreams/v1/clock.proto\x12\x10sf.substreams.v1\x1a\x1fgoogle/protobuf/timestamp.proto\"i\n\x05\x43lock\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x16\n\x06number\x18\x02 \x01(\x04R\x06number\x12\x38\n\ttimestamp\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\ttimestamp\"2\n\x08\x42lockRef\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x16\n\x06number\x18\x02 \x01(\x04R\x06numberB\xca\x01\n\x14\x63om.sf.substreams.v1B\nClockProtoP\x01ZDgithub.com/streamingfast/substreams/pb/sf/substreams/v1;pbsubstreams\xa2\x02\x03SSX\xaa\x02\x10Sf.Substreams.V1\xca\x02\x10Sf\\Substreams\\V1\xe2\x02\x1cSf\\Substreams\\V1\\GPBMetadata\xea\x02\x12Sf::Substreams::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'sf.substreams.v1.clock_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\024com.sf.substreams.v1B\nClockProtoP\001ZDgithub.com/streamingfast/substreams/pb/sf/substreams/v1;pbsubstreams\242\002\003SSX\252\002\020Sf.Substreams.V1\312\002\020Sf\\Substreams\\V1\342\002\034Sf\\Substreams\\V1\\GPBMetadata\352\002\022Sf::Substreams::V1'
  _globals['_CLOCK']._serialized_start=83
  _globals['_CLOCK']._serialized_end=188
  _globals['_BLOCKREF']._serialized_start=190
  _globals['_BLOCKREF']._serialized_end=240
# @@protoc_insertion_point(module_scope)
