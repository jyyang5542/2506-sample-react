'use client';

import { CodeLine } from '@/components/atoms';
import { GuideList } from '@/constants/GuideList';
import useThemeStore from '@/stores/themeStore';
import { Base, PADDING_X } from '@/styles/Base.style';
import Link from 'next/link';
import { Style } from './Guide.style';

interface Props {}

const Guide = ({}: Props) => {
	const { themeMode } = useThemeStore();

	return (
		<Style.Wrap theme={themeMode}>
			<h1>페이지 가이드</h1>
			<Style.CategoryWrap>
				<h2>UI 가이드</h2>
				<Base.Box as='ul' pl={PADDING_X}>
					<li>
						<CodeLine language='bash'>npm run storybook</CodeLine>
					</li>
				</Base.Box>
			</Style.CategoryWrap>
			{GuideList.map((data, i) => (
				<Style.CategoryWrap key={`${data.category}-${i}`}>
					<h2>{data.category}</h2>
					<Style.TableWrap>
						<table>
							<colgroup>
								<col style={{ width: '15%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '6.5%' }} />
								<col />
							</colgroup>
							<thead>
								<tr>
									<th>페이지명</th>
									{Array.from({ length: 5 }).map((_, j) => {
										const depth = j + 1;
										return <th key={`depth-${depth}`}>Depth {depth}</th>;
									})}
									<th>날짜</th>
									<th>비고</th>
								</tr>
							</thead>
							<tbody>
								{data.list.map((item, j) => (
									<tr key={`${data.category}-${j}`}>
										<Style.Td>
											<Link href={`${item.dir}`}>{item.pageName}</Link>
										</Style.Td>
										<Style.Td>{!!item.depth[0] && item.depth[0]}</Style.Td>
										<Style.Td>{!!item.depth[1] && item.depth[1]}</Style.Td>
										<Style.Td>{!!item.depth[2] && item.depth[2]}</Style.Td>
										<Style.Td>{!!item.depth[3] && item.depth[3]}</Style.Td>
										<Style.Td>{!!item.depth[4] && item.depth[4]}</Style.Td>
										<Style.Td align='center'>{item.date}</Style.Td>
										<Style.Td>{item.memo}</Style.Td>
									</tr>
								))}
							</tbody>
						</table>
					</Style.TableWrap>
				</Style.CategoryWrap>
			))}
		</Style.Wrap>
	);
};

export default Guide;
