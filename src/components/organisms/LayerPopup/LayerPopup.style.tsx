'use client';

import styled, { css } from 'styled-components';

type Variant = 'dialog' | 'bottomSheet' | 'alert';
type Size = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary';

interface WrapProps {
	variant: Variant;
	size: Size;
}

interface OverlayProps {
	variant: Variant;
}

interface ButtonProps {
	variant: ButtonVariant;
}

export const Style = {
	Overlay: styled.div<OverlayProps>`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: ${({ variant }) => (variant === 'bottomSheet' ? 'flex-end' : 'center')};
		z-index: 1000;
	`,

	Wrap: styled.div<WrapProps>`
		background: #fff;
		border-radius: ${({ variant }) => (variant === 'bottomSheet' ? '16px 16px 0 0' : '12px')};
		padding: 24px;
		width: ${({ size }) => (size === 'sm' ? '280px' : size === 'md' ? '400px' : '600px')};
		max-width: 90%;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		${({ variant }) =>
			variant === 'bottomSheet' &&
			css`
				animation: slideUp 0.3s ease-out;
			`}

		@keyframes slideUp {
			from {
				transform: translateY(100%);
			}
			to {
				transform: translateY(0);
			}
		}
	`,

	CloseButton: styled.button`
		position: absolute;
		top: 12px;
		right: 12px;
		border: none;
		background: transparent;
		font-size: 20px;
		cursor: pointer;
	`,

	Title: styled.h3`
		margin: 0 0 12px 0;
		font-size: 18px;
		font-weight: 600;
	`,

	Content: styled.div`
		margin-bottom: 24px;
		font-size: 16px;
		color: #333;
	`,

	Actions: styled.div`
		display: flex;
		justify-content: flex-end;
		gap: 12px;
	`,

	Button: styled.button<ButtonProps>`
		padding: 8px 16px;
		border-radius: 6px;
		font-size: 14px;
		cursor: pointer;
		border: none;

		${({ variant }) =>
			variant === 'primary'
				? css`
						background-color: #0070f3;
						color: #fff;
				  `
				: css`
						background-color: #f0f0f0;
						color: #333;
				  `}
	`
};
