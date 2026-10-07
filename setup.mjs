// Moves flat files like "src__components__Quiz.tsx" into src/components/Quiz.tsx (run before build).
import { readdirSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname } from 'node:path'
for (const name of readdirSync('.')) {
  if (!name.includes('__')) continue
  const dest = name.split('__').join('/')
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(name, dest)
  console.log('placed', dest)
}
