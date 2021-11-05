[![Marketplace](https://vsmarketplacebadge.apphb.com/version/quicktype.quicktype.svg)](https://marketplace.visualstudio.com/items/doggy8088.quicktype-refresh) [![Installs](https://vsmarketplacebadge.apphb.com/installs/doggy8088.quicktype-refresh.svg)](https://marketplace.visualstudio.com/items/doggy8088.quicktype-refresh) [![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/doggy8088.quicktype-refresh.svg)](https://marketplace.visualstudio.com/items/doggy8088.quicktype-refresh)

## FAQ

Q: There is already a [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype) extension. Why do you publish a **Refresh** version of the same extension?

A: This extension is originally from [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype) extension. It because the original extension is not updating since **9/20/2018, 11:48:28 PM**. Many of the already fixed bugs/issues are not released. That's why I published this extension with **latest** version from the [quicktype/quicktype-vscode](https://github.com/quicktype/quicktype-vscode) repo.

## Introduction

**Supports** `TypeScript`, `Python`, `Go`, `Ruby`, `C#`, `Java`, `Swift`, `Rust`, `Kotlin`, `C++`, `Flow`, `Objective-C`, `JavaScript`, `Elm`, and `JSON Schema`.

-   Interactively generate types and (de-)serialization code from JSON, JSON Schema, and TypeScript
-   Paste JSON/JSON Schema/TypeScript as code

![](https://raw.githubusercontent.com/quicktype/quicktype-vscode/master/media/demo-interactive.gif)

`quicktype` infers types from sample JSON data, then outputs strongly typed models and serializers for working with that data in your desired programming language. For more explanation, read [A first look at quicktype](http://blog.quicktype.io/first-look/).

In any JSON file, use the command "Open quicktype for JSON" to summon quicktype, which will generate types from the JSON. Invoke "Change quicktype's target language" to pick a different language. There are similar "Open quicktype" commands for JSON Schema and TypeScript.

Another way to use quicktype is to copy JSON into the clipboard and invoke "Paste JSON as code/types":

![](https://raw.githubusercontent.com/quicktype/quicktype-vscode/master/media/demo.gif)

For a more powerful experience, including custom options and the ability to generate code from multiple JSON samples, try [quicktype.io](https://app.quicktype.io).

## Installing

This extension is available for free in the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items/doggy8088.quicktype-refresh)

## Customization

-   `quicktype.justTypes`: Generate only types, or also produce (de)serialization code when using "Open quicktype". When using "Paste", you can pick between the commands for "types" and "code", without having to set this option.

-   `quicktype.inferMaps`, `quicktype.inferEnums`, `quicktype.inferDateTimes`, `quicktype.inferUuids`, `quicktype.inferBoolStrings`, `quicktype.inferIntegerStrings`: Tell quicktype whether it should try to infer those types from the input JSON. This is not a precise science, so sometimes the guess will be wrong, which is why you can turn them off through these options. Also, quicktype doesn't support dates, UUIDs and stringified integers/booleans in all target languages yes.

## Contribute!

quicktype is an open source project, and we're always happy about contributors. If you can think of a way to improve [this extension](https://github.com/quicktype/quicktype-vscode), or [quicktype](https://github.com/quicktype/quicktype), please consider contributing, especially if you know TypeScript. Code is only one way to contribute, though: we're particularly short on documentation.

If you find a bug, please [report it on GitHub](https://github.com/quicktype/quicktype-vscode/issues).
