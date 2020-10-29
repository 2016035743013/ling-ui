block	将按钮宽度调整为其父宽度的选项	boolean	false	
danger	设置危险按钮	boolean	false	
disabled	按钮失效状态	boolean	false	
ghost	幽灵属性，使按钮背景透明	boolean	false	
href	点击跳转的地址，指定此属性 button 的行为和 a 链接一致	string	-	
htmlType	设置 button 原生的 type 值，可选值请参考 HTML 标准	string	button	
icon	设置按钮的图标组件	ReactNode	-	
loading	设置按钮载入状态	boolean | { delay: number }	false	
onClick	点击按钮时的回调	(event) => void	-	
shape	设置按钮形状，可选值为 circle、 round 或者不设	string	-	
size	设置按钮大小	large | middle | small	-	
target	相当于 a 链接的 target 属性，href 存在时生效	string	-	
type	设置按钮类型	primary | ghost | dashed | danger | link | text | default	default