/* @flow */

import { toMatchDiffSnapshot, getSnapshotDiffSerializer } from 'snapshot-diff';
import { html } from 'js-beautify';

global.expect.extend({ toMatchDiffSnapshot });
global.expect.addSnapshotSerializer(getSnapshotDiffSerializer());

function beautyHtmlSerializer() {
  return {
    test(value: any) {
      return typeof value === 'string' && value[0] === '<' && value[value.length - 1] === '>';
    },
    print(value: any) {
      return html(value, { indent_size: 2 });
    },
  };
}
global.expect.addSnapshotSerializer(beautyHtmlSerializer());
