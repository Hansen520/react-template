import _ from 'lodash-es';
/**
 * 获取权限列表
 * @param auth
 */
export const getPermissionList = (auth: any) => {
  const result: string[] = [];
  Object.keys(auth).forEach((item) => {
    if (auth[item]) {
      result.push(item);
    }
  });
  return result;
};

/**
 * 左侧导航栏菜单过滤
 * auth不设置默认都有权限
 * @param list
 * @param auth
 */
export const filterMenus = (list: any, authList: any) => {
  return list.filter((item: any) => {
    if (item.children) {
      item.children = filterMenus(item.children, authList);
    }
    if (!_.isEmpty(item.auth)) {
      // 判断是否有交集
      if (!_.isEmpty(_.intersection(authList, item.auth))) {
        return true;
      }
      return false;
    }
    return true;
  });
};

/**
 * @description 递归查询对应的路由项目
 * @param {String} key 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (key: string, routes: any = []) => {
	let result = {};
	for (let item of routes) {
		if (item.key === key) return item;
		if (item.children) {
			const res = searchRoute(key, item.children);
			if (Object.keys(res).length) result = res;
		}
	}
	return result;
};
