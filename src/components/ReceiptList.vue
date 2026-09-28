<script setup lang="ts">
import DataView from 'primevue/dataview'
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import type { ReceiptListItem } from '@/types';

interface Props {
    receipts: ReceiptListItem[];
}

const props = defineProps<Props>()

const selected = defineModel<string | null>('selected')

</script>

<template>
    <DataView :value="props.receipts" class="w-[380px]">
        <template #list="{ items }">
            <div v-for="(item) in items" :key="item.key" @click="selected = item.key" :class="{
                'bg-blue-100!': selected === item.key
            }" class="cursor-pointer hover:bg-gray-100">
                <div class="flex border">
                    <div class="flex flex-col gap-1 p-4">
                        <span class="text-2xl">{{ item.label }}</span>
                        <span>{{ `ID:${item.id}` }}</span>
                        <span>{{ format(item.date, "yyyy/MM/dd/ (E)", { locale: ja }) }}</span>

                    </div>
                    <div class="flex flex-col gap-2 p-4">
                        <span>{{ item.isUploaded ? '提出済' : '未提出' }}</span>
                        <span>{{ `📎${item.fileCount}` }}</span>
                    </div>
                </div>

            </div>
        </template>

    </DataView>
</template>