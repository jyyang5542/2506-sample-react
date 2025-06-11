'use client';

import { GuideList } from '@/constants/Guide';
import useThemeStore from '@/stores/themeStore';
import Link from 'next/link';
import { Wrap } from './Guide.style';

interface Props {}

const Guide = ({}: Props) => {
	const { themeMode } = useThemeStore();

	return (
		<Wrap theme={themeMode}>
			<h1>페이지 가이드</h1>
			{GuideList.map((data, i) => (
				<div key={`${data.category}-${i}`} className={'category-wrap'}>
					<h2>{data.category}</h2>
					<div className={'table-wrap'}>
						<table>
							<colgroup>
								<col style={{ width: '15%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '12%' }} />
								<col style={{ width: '8%' }} />
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
										<td>
											<Link href={`${item.dir}${item.pageName}`}>{item.pageName}</Link>
										</td>
										<td>{!!item.depth[0] && item.depth[0]}</td>
										<td>{!!item.depth[1] && item.depth[1]}</td>
										<td>{!!item.depth[2] && item.depth[2]}</td>
										<td>{!!item.depth[3] && item.depth[3]}</td>
										<td>{!!item.depth[4] && item.depth[4]}</td>
										<td>{item.date}</td>
										<td>{item.memo}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			))}
		</Wrap>
	);
};

export default Guide;
