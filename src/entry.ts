import { App } from 'vue';
import { Button } from './button';
import JSXButton from './JSXButton';
import SFCButton from './SFCButton.vue';
import 'uno.css';
// 导出单个组件
export { Button, JSXButton, SFCButton };

// 编写一个插件时间，实现一个install方法

export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
