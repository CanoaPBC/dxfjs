import { lwPolylineOptions_t } from 'EntitiesSection/Entities/LWPolyline';

export function bulge(fillet: number): number {
	const length = Math.sqrt(Math.pow(fillet, 2) + Math.pow(fillet, 2));
	const b = length / 2;
	const d = Math.sqrt(Math.pow(fillet, 2) - Math.pow(b, 2));
	const height = fillet - d;
	const bulge = -height / b;
	return bulge;
}

export type chamfer_t = {
	first: number;
	second?: number;
};

export type rectangleOptions_t = lwPolylineOptions_t & {
	chamfer?: chamfer_t;
	fillet?: number;
};

export type rgb_t = {
	r: number;
	g: number;
	b: number;
};

export type vec3_t = {
	x: number;
	y: number;
	z: number;
};

export type vec2_t = {
	x: number;
	y: number;
};

export function point3d(x: number, y: number, z: number): vec3_t {
	return { x, y, z };
}

export function point2d(x: number, y: number): vec2_t {
	return { x, y };
}
