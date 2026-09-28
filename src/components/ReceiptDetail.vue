<script setup lang="ts">
import type { ReceiptDetail } from '@/types';
import { format } from 'date-fns';
import { ja } from "date-fns/locale"
import { computed } from 'vue';
import { openPath } from '@tauri-apps/plugin-opener'
import { attachmentsDir } from '@/utils/appPath'
import Textarea from 'primevue/textarea';
import Button from 'primevue/Button';

interface Props {
    receiptKey: string | null;
}
const props = defineProps<Props>()

const defaultReceipt: ReceiptDetail = {
    key: '',
    date: new Date(),
    id: '',
    label: '',
    filePaths: [],
    description: '',
    isUploaded: false
}

let key = 0
const dummy: ReceiptDetail[] = [
    {
        key: (key++).toString(),
        date: new Date(),
        id: '1234-56-7890',
        label: '富山出張',
        filePaths: ['\\dummy\\テスト.txt', 'C/AAA/CCCdd', 'C/AAA/CCCdd', 'C/AAA/CCCdd', 'C/AAA/CCCdd', 'C/AAA/CCCdd', 'C/AAA/CCCdd', 'C/AAA/CCCdd'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '1111-56-7890',
        label: '新潟出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '2222-56-7890',
        label: '愛知出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: false
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '3333-56-7890',
        label: '大阪出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    }
    ,
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    }
    ,
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    }
    ,
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    },
    {
        key: (key++).toString(),
        date: new Date(),
        id: '4444-56-7890',
        label: '和歌山出張',
        filePaths: ['C//AAA/BBB', 'C/AAA/CCC'],
        description: '',
        isUploaded: true
    }
]

/**
 * 表示するデータ
 */
const receipt = computed(() => dummy.find(e => e.key === props.receiptKey) ?? defaultReceipt)

/**
 * ファイルを開く
 */
const openFile = async (path: string) => {
    try {
        await openPath(attachmentsDir + path)
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div class="flex flex-col gap-2 border rounded-lg mt-8 p-16">
        <span class="pl-[240px] font-semibold text-xl"
            :class="{ 'text-green-400': receipt.isUploaded, 'text-red-400': !receipt.isUploaded }">{{
                receipt.isUploaded ? 'アップロード済み' : '未アップロード'
            }}</span>
        <span>{{ `目的: ${receipt.label}` }}</span>
        <span>{{ `ID: ${receipt.id}` }}</span>
        <span>{{ `登録日: ${format(receipt.date, "yyyy/MM/dd/ (E)", { locale: ja })}` }}</span>
        <span>{{ '領収書' }}</span>
        <div class="border flex flex-col p-2 h-[200px] overflow-y-auto w-[400px]">
            <span v-for="path, index in receipt.filePaths" :key="index + path" class="cursor-pointer hover:underline"
                @click="openFile(path)">{{
                    `${index + 1}. ${path}` }}</span>
        </div>
        <span>{{ '備考' }}</span>
        <Textarea class="resize-none h-50" />
        <div class="flex mt-2 justify-end gap-4">
            <Button severity="danger" raised label="削除" />
            <Button label="アップロード" raised />
            <Button label="保存" raised />
        </div>
    </div>
</template>