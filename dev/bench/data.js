window.BENCHMARK_DATA = {
  "lastUpdate": 1724429559707,
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
      }
    ]
  }
}