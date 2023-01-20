import { describe } from 'mocha';
import BrowserHash from '@/src/hashes/browser';
import HashTestHelper, { HashTestVector } from './helper';

const vector: HashTestVector = [
  {
    content: ``,
    hash: `38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b`,
  },
  {
    content: `a`,
    hash: `54a59b9f22b0b80880d8427e548b7c23abd873486e1f035dce9cd697e85175033caa88e6d57bc35efae0b5afd3145f31`,
  },
  {
    content: `abc`,
    hash: `cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7`,
  },
  {
    content: `message digest`,
    hash: `473ed35167ec1f5d8e550368a3db39be54639f828868e9454c239fc8b52e3c61dbd0d8b4de1390c256dcbb5d5fd99cd5`,
  },
  {
    content: `abcdefghijklmnopqrstuvwxyz`,
    hash: `feb67349df3db6f5924815d6c3dc133f091809213731fe5c7b5f4999e463479ff2877f5f2936fa63bb43784b12f3ebb4`,
  },
  {
    content: `abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq`,
    hash: `3391fdddfc8dc7393707a65b1b4709397cf8b1d162af05abfe8f450de5f36bc6b0455a8520bc4e6f5fe95b1fe3c8452b`,
  },
  {
    content: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
    hash: `1761336e3f7cbfe51deb137f026f89e01a448e3b1fafa64039c1464ee8732f11a5341a6f41e0c202294736ed64db1a84`,
  },
];

describe(`SHA-384 Hash`, () =>
  HashTestHelper.test(new BrowserHash(`sha384`), vector));
