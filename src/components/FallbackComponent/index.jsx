import * as React from "react";

export default function FallbackComponent({ error, info }) {
	console.log(error, info);
	return (
		<>
			<div>{JSON.stringify(error.message)}</div>
			<hr />
			<div>{JSON.stringify(info)}</div>
		</>
	);
}
