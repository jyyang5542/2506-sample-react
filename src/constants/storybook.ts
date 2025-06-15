export const argTypes = {
	SPACING: {
		mx: { description: '`margin-left` 및 `margin-right`', control: { type: 'number' } },
		my: { description: '`margin-top` 및 `margin-bottom`', control: { type: 'number' } },
		mt: { description: '`margin-top`', control: { type: 'number' } },
		mb: { description: '`margin-bottom`', control: { type: 'number' } },
		ml: { description: '`margin-left`', control: { type: 'number' } },
		mr: { description: '`margin-right`', control: { type: 'number' } },
		px: { description: '`padding-left` 및 `padding-right`', control: { type: 'number' } },
		py: { description: '`padding-top` 및 `padding-bottom`', control: { type: 'number' } },
		pt: { description: '`padding-top`', control: { type: 'number' } },
		pb: { description: '`padding-bottom`', control: { type: 'number' } },
		pl: { description: '`padding-left`', control: { type: 'number' } },
		pr: { description: '`padding-right`', control: { type: 'number' } }
	},
	TEXT: {
		color: { description: '`#000000`, `#FFFFFF` 등', control: false },
		fontFamily: { description: '`"Pretendard"` 등', control: false },
		fontSize: { control: { type: 'number' } },
		fontWeight: { control: { type: 'number' } },
		opacity: { description: '0부터 1 사이의 소숫점 숫자', control: { type: 'number' } },
		lineHeight: { description: '', control: false },
		ellipsis: { description: '몇 줄 이상부터 말줄임(...) 처리 하는지<br />(기본값은 설정되어 있지 않습니다.)', control: { type: 'number' } }
	}
} as const;
