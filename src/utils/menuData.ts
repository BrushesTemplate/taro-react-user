export const defaultPageValue = {};

export interface NodeGraph {
  type: string;
  id: number;
  props: { [v: string]: unknown };
}

export interface PageMaterialType {
  nodeGraph?: Array<NodeGraph>;
  page?: string;
  version?: string;
  pageConfig?: { [v: string]: unknown };
}

class MenuModal {
  // 数据
  lowCodeGraph: PageMaterialType;

  constructor(defaultValue: PageMaterialType) {
    this.lowCodeGraph = defaultValue;
  }

  init(value: PageMaterialType) {
    this.lowCodeGraph = value;
  }
}


export const menuGraph = new Map<string, MenuModal>();

let prevMenuId = '';

export const useMenuGraph = (modeId = prevMenuId, defaultValue = defaultPageValue) => {
  const expId = (prevMenuId = modeId.toString());
  let existedGraph = menuGraph.get(expId);
  if (!existedGraph) {
    existedGraph = new MenuModal(defaultValue);
    menuGraph.set(expId, existedGraph);
  }
  return existedGraph;
};
