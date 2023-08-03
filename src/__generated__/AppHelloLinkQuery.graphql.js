/**
 * @generated SignedSource<<aa4552603ddde64ad052483bb71fb079>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppHelloLinkQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "allLinks",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppHelloLinkQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "allLinks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "73ef2c01bb92e8e6ac89b6fe99c576e0",
    "id": null,
    "metadata": {},
    "name": "AppHelloLinkQuery",
    "operationKind": "query",
    "text": "query AppHelloLinkQuery {\n  allLinks {\n    url\n    id\n  }\n}\n"
  }
};
})();

node.hash = "57098b5f9d7615948102dee6c8798fc9";

module.exports = node;
