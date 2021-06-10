# clover2lcov-action

> GitHub Action for converting Clover files to LCOV reports

![build-test](https://github.com/andstor/clover2lcov-action/workflows/build/badge.svg)

This is a [GitHub Action](https://developer.github.com/actions/) to convert code coverage reopors from Clover to LCOV format.

## Usage

The following example [workflow step](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) will read the contents of the Clover `coverage.xml` file, and converrt it to an LCOV file `coverage.info`.

```yml
- name: "Clover to LCOV"
  uses: andstor/clover2lcov-action@v1
  with:
    src: "coverage.xml"
    dst: "coverage.info"
```

## Options ⚙️

The following input variables options can/must be configured:

|Input variable|Necessity|Description|Default|
|----|----|----|----|
|`src`|Required|the path to the file to read.||
|`dst`|Optional|the encoding of the file to read.|`src` with `.info` extension|

## Outputs
- `file`: The path to thhe converted LCOV file.
## License

Copyright © 2021 [André Storhaug](https://github.com/andstor)

clover2lcov-action is licensed under the [MIT License](https://github.com/andstor/clover2lcov-action/blob/master/LICENSE).
