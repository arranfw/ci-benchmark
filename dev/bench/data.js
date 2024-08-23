window.BENCHMARK_DATA = {
  "lastUpdate": 1724430895636,
  "repoUrl": "https://github.com/arranfw/ci-benchmark",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "committer": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "distinct": true,
          "id": "de8e5110ab5bb137bf15656f63f96b8f19fb2eeb",
          "message": "benchmark js",
          "timestamp": "2024-08-23T10:06:06-06:00",
          "tree_id": "086e57f0cdea208755624daf7ff857cac75e6f4f",
          "url": "https://github.com/arranfw/ci-benchmark/commit/de8e5110ab5bb137bf15656f63f96b8f19fb2eeb"
        },
        "date": 1724429559267,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "deffered.resolve()",
            "value": 785,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "11 samples"
          },
          {
            "name": "setImmediate()",
            "value": 795,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "fs.readFile()",
            "value": 590,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "committer": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "distinct": true,
          "id": "2f46bb89ea8e5456f64e20e5a6c75ea71f9a1563",
          "message": "new data",
          "timestamp": "2024-08-23T10:13:58-06:00",
          "tree_id": "7a841afd554a33cb5cef1d17ad7a86246aeebf6c",
          "url": "https://github.com/arranfw/ci-benchmark/commit/2f46bb89ea8e5456f64e20e5a6c75ea71f9a1563"
        },
        "date": 1724429676503,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "deffered.resolve()",
            "value": 685,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "11 samples"
          },
          {
            "name": "setImmediate()",
            "value": 695,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "fs.readFile()",
            "value": 690,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "committer": {
            "email": "arran.woodruff@teamexos.com",
            "name": "arranfw",
            "username": "arranfw"
          },
          "distinct": true,
          "id": "9450aa3ab228ca9c5aa29ccd77f6c46ca600d562",
          "message": "use custom format, duh",
          "timestamp": "2024-08-23T10:34:38-06:00",
          "tree_id": "508c8dbfe2826b74f1079972301234538351b9e7",
          "url": "https://github.com/arranfw/ci-benchmark/commit/9450aa3ab228ca9c5aa29ccd77f6c46ca600d562"
        },
        "date": 1724430895373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "e2e tests",
            "value": 520,
            "unit": "Seconds"
          },
          {
            "name": "unit tests",
            "value": 80,
            "unit": "Seconds"
          },
          {
            "name": "build",
            "value": 35,
            "unit": "Seconds"
          }
        ]
      }
    ]
  }
}