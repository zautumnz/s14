#!/usr/bin/env node

import { readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import t from 'terminal-image'

const dir = 'emotes'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const imgs = readdirSync(resolve(__dirname, dir))
const rand = imgs[Math.floor(Math.random() * imgs.length)]
const p = await t.file(resolve(dir, rand))
console.log(p)
