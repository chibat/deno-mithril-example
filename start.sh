#!/bin/sh

deno run --allow-net --allow-read https://deno.land/std@0.106.0/http/file_server.ts ./docs
