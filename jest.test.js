/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-23 22:11:23
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-02-23 23:04:36
 * @FilePath: /auto-test-jest-demo/jest.test.js
 * @Description:
 */
// const fns = require('./index');
// const { ZcyZooTeam, happyDay } = fns;
// test("测试ZcyZooTeam", () => {
//   expect(ZcyZooTeam("Zero")).toBe("ZcyZooTeam");
// });
// test("测试happy day", () => {
//   expect(happyDay(30, 12)).toBe("happy 360 days!");
// });


// 因为已经配置了babel，所以可以使用 es6 的方式进行引入
import { ZcyZooTeam, happyDay } from './index';

test("测试ZcyZooTeam", () => {
  expect(ZcyZooTeam("Zero")).toBe("ZcyZooTeam");
});

test("测试happy day", () => {
  expect(happyDay(30, 12)).toBe("happy 360 days!");
});