import { exec } from 'child_process';

(async () => {
  const name = process.argv[2];
  const command = process.argv[3];

  exec(command, (error, stdout, stderr) => {
    const startTime = process.hrtime();
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }

    const endTime = process.hrtime(startTime);

    const runtimeSeconds = startTime[0] - endTime[0];
    const runtimeMilliseconds = Math.round(
      (startTime[1] - endTime[1]) / 1_000_000,
    );
    const runtime = runtimeSeconds * 1000 + runtimeMilliseconds;

    console.log({
      runtimeSeconds,
      runtimeMilliseconds,
      runtime,
    });

    console.log(`stdout:\n${stdout}`);
    console.log(`Execution time: ${runtime} ms`);

    Bun.write(
      `${name}_benchmark_data.json`,
      JSON.stringify([
        {
          name: name,
          unit: 'ms',
          value: runtime,
        },
      ]),
    );
  });
})();
