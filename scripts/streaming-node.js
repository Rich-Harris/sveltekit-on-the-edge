import fs from 'node:fs';

const base = '.vercel/output/functions';

// enable experimental streaming for Node.js functions.
// eventually this will be the default
for (const dir of fs.readdirSync(base)) {
	const config_file = `${base}/${dir}/.vc-config.json`;
	const config = JSON.parse(fs.readFileSync(config_file, 'utf-8'));

	if (config.launcherType === 'Nodejs') {
		config.experimentalResponseStreaming = true;
		fs.writeFileSync(config_file, JSON.stringify(config, null, '\t'));
	}
}