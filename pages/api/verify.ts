import {getRequestContext} from '@cloudflare/next-on-pages';
export const runtime = 'edge';

import type { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

const { env } = getRequestContext();

export default async function handler(req: NextRequest) {
	return new Response(
		JSON.stringify({
		}),
		{
			status: 200,
			headers: {
				'content-type': 'application/json',
			},
		},
	);
}