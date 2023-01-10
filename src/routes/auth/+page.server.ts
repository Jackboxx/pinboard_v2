import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!username) {
			return fail(400, { username, missing: true });
		}
		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!password) {
			return fail(400, { password, missing: true });
		}

		const prisma = new PrismaClient();
		try {
			const user = await prisma.user.create({
				data: {
					username,
					email,
					password
				}
			});

			cookies.set('userId', user.id.toString(), { path: '/' });
			return { success: true, user: user };
		} catch (_) {
			return fail(500, { success: false });
		}
	},
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!password) {
			return fail(400, { password, missing: true });
		}

		const prisma = new PrismaClient();
		const user = await prisma.user.findFirst({ where: { password: password, email: email } });

		if (!user) return { success: false };

		cookies.set('userId', user.id.toString(), { path: '/' });
		return { success: true, user: user };
	}
};
