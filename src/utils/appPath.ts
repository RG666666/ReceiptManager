// utils/appPaths.ts

import { appLocalDataDir, join } from '@tauri-apps/api/path'

const baseDir = await appLocalDataDir()
const attachmentsDir = await join(
    baseDir,
    'attachments'
)

export{
    attachmentsDir
}