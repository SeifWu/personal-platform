function listToTree(list: Array<any>, pid = 0, index = 0, pidName = 'pid'): Array<any> {
  const result: Array<any> = [];
  const listLen = list.length;
  for (let i = index; i < listLen; i++) {
    const item = list[i];
    const child = listToTree(list, item.id, index + 1);
    if (child.length) {
      item['children'] = child;
    }
    if (list[i][pidName] === pid) {
      result.push(list[i]);
    }
  }

  return result;
}

export default listToTree;
