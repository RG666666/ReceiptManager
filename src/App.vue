<script setup lang="ts">
import InputText from 'primevue/InputText'
import ReceiptList from './components/ReceiptList.vue';
import type { ReceiptListItem } from './types.ts';
import { ref } from 'vue';
import ReceiptDetail from './components/ReceiptDetail.vue';
import Button from 'primevue/Button';
import { PrimeIcons } from '@primevue/core/api';

let key = 0
const dummy: ReceiptListItem[] = [
  {
    key: (key++).toString(),
    date: new Date(),
    id: '1234-56-7890',
    label: '富山出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '1111-56-7890',
    label: '新潟出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '2222-56-7890',
    label: '愛知出張',
    fileCount: 2,
    isUploaded: false
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '3333-56-7890',
    label: '大阪出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  }
  ,
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  }
  ,
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  }
  ,
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  },
  {
    key: (key++).toString(),
    date: new Date(),
    id: '4444-56-7890',
    label: '和歌山出張',
    fileCount: 3,
    isUploaded: true
  }
]

const selectedReceiptKey = ref<string | null>(null)

</script>

<template>
  <div class="flex">
    <!--リストビュー-->
    <div class="flex min-h-0 flex-col w-100 h-[800px] m-4">
      <!-- 検索・フィルター -->
      <div class="shrink-0 p-3">
        <InputText placeholder="領収書を検索" fluid />
      </div>
      <!-- スクロール領域 -->
      <div class="relative min-h-0 flex-1 border">
        <div class="h-full overflow-y-auto">
          <ReceiptList :receipts="dummy" v-model:selected="selectedReceiptKey" />
        </div>

        <!-- 新規追加ボタン -->
        <Button :icon="PrimeIcons.FILE_PLUS"
          class="absolute bottom-25 left-4 shadow-lg  w-20! h-20! rounded-3xl! bg-blue-100! border-blue-500! hover:bg-blue-300!"
          :pt="{ icon: { class: 'text-6xl! text-black' } }" />
      </div>
    </div>
    <!-- 詳細ビュー-->
    <div>
      <ReceiptDetail :receipt-key="selectedReceiptKey" />
    </div>
  </div>
</template>

<style scoped></style>
