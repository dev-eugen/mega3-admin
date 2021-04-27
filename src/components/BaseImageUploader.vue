<template>
    <div class=" mb-2">
        <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div class="pnl-itm">
                Media
            </div>
            <div class="px-4 py-5 sm:p-6 ">
                <div @drop="startDrop($event)" v-if="modelValue.length === 0" class="w-full px-2">
                    <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                viewBox="0 0 48 48" aria-hidden="true">
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input @change="change($event)" multiple id="file-upload" name="file-upload" type="file"
                                        class="sr-only" />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 grid-rows-2  gap-4">
                    <div v-for="(image, i) in modelValue" :key="i"  @drop="onReplase($event, i)" @dragstart="onDragStart($event, i)"  draggable="true"
                        :class="[i == 0 ? 'row-span-2 col-span-2' : '', 'group overflow-hidden border border-indigo-400 hover:border-indigo-800 rounded-lg relative  hover:bg-indigo-150 flex justify-center items-center bg-white']">

                        <img :src="image.url"  class="group-hover:opacity-20"/>
                        <button type="button" v-clipboard:copy="modelValue[i].url" class="focus:outline-none absolute w-full top-0 flex justify-end opacity-0 group-hover:opacity-90">
                        <button class="focus:outline-none">    
                            <LinkIcon class="m-1 h-5 w-5 text-indigo-800"/>
                        </button>
                            <PencilAltIcon class="m-1 h-5 w-5 text-indigo-800" @click="modelValue[i].ref = true" />
                            <TrashIcon @click="deleteFile(i)" class="m-1 h-5 w-5 text-indigo-800" />
                        </button>
                        <div class="absolute flex  flex-col opacity-0 group-hover:opacity-90">
                            <p class="flex justify-center text-sm font-medium text-indigo-800 pointer-events-none">{{ image.alt }}</p>
                            <p v-if="image.size" class="flex justify-center text-sm font-medium text-indigo-800 pointer-events-none">
                                {{ image.size + 'KB'}}</p>
                        </div>
                        <TransitionRoot as="template" :show="modelValue[i].ref">
                            <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="modelValue[i].ref = false" :open="modelValue[i].ref">
                            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                                <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                </TransitionChild>

                                <!-- This element is to trick the browser into centering the modal contents. -->
                                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <input v-model="modelValue[i].alt"  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Alt of your image" />
                                    </div>
                                </div>
                                </TransitionChild>
                            </div>
                            </Dialog>
                        </TransitionRoot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        reactive,
        toRefs,
        watchEffect
    } from 'vue'
    import {
        fileSave
    } from "@/services/Files.js"
    export default {
        props: {
            modelValue: {
                type: Array,
                default: []
            },
        },
        setup(props, {
            emit
        }) {
            const state = reactive({
                count: 0,
            })

            

            // load MEthods

            const startDrop = async (event) => {
                event.dataTransfer.files.forEach(element => {
                    if (element.name.slice(element.name.length - 4, element.name.length) == '.png' ||
                        element.name.slice(element.name.length - 4, element.name.length) == '.jpg' ||
                        element.name.slice(element.name.length - 5, element.name.length) == '.jpeg') {
                        fileSave(element).then((r) => {
                            props.modelValue.push({
                                url: r.url,
                                alt: element.name,
                                rotate: 0,
                                size: (r.size / 1_000).toFixed(2)
                            })
                        })
                    }

                })
            }


            const change = async (event) => {
                event.target.files.forEach(element => {
                    if (element.name.slice(element.name.length - 4, element.name.length) == '.png' ||
                        element.name.slice(element.name.length - 4, element.name.length) == '.jpg' ||
                        element.name.slice(element.name.length - 5, element.name.length) == '.jpeg') {
                        fileSave(element).then((r) => {
                            props.modelValue.push({
                                url: r.url,
                                alt: element.name,
                                rotate: 0,
                                size: (r.size / 1_000).toFixed(2)
                            })
                        })
                    } else {

                    }

                })
            }

            // files operations

            const deleteFile = (i) => {
                props.modelValue.splice(i, 1)
            }

            const rotate = (i) => {
                if (props.modelValue[i].rotate === 270) {
                    props.modelValue[i].rotate = 0
                } else {
                    props.modelValue[i].rotate += 90
                }
            }

            // move methods

            const onDragStart = (e, id) => {
                e.dataTransfer.dropEffect = "move"
                e.dataTransfer.effectAllowed = "move"
                e.dataTransfer.setData("id", id)
            }

            const onReplase = (e, id) => {
                let temp = props.modelValue[id];
                props.modelValue[id] = props.modelValue[e.dataTransfer.getData("id")]
                props.modelValue[e.dataTransfer.getData("id")] = temp
            }


            watchEffect(() => emit('update:modelValue', props.modelValue))
            return {
                ...toRefs(state), onDragStart, onReplase,
                rotate,
                deleteFile,
                startDrop,
                change
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>