import moment from 'moment-timezone'
import Vue from 'vue'
// import {settingsAwesomeFontLabels} from './app.settings.js'
// resources/js/mixins.js
export default {

    methods: {

        randomInt(min, max) {
            return min + Math.floor((max - min) * Math.random())
        },
        escapeHtml(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")
        },

        isEmpty(value) {
            if (typeof value === 'object') {
                if (value == null) return true
                if (value.length==0) return true
            }
            if (value === undefined) return true
            if (value === null) return true
            if (value === '') return true
        },

        getSplitted(str, splitter, index) {
            if (typeof str == "undefined") return ""
            var valuesArray = str.split(splitter)
            if (typeof valuesArray[index] != "undefined") {
                return valuesArray[index]
            }
            return ''
        },

        getFilenameOfPath(Filename) {
            var valuesArray = Filename.split('/')
            console.log('valuesArray::')
            console.log(valuesArray)
            console.log(typeof valuesArray)

            if (typeof valuesArray[valuesArray.length-1] != "undefined") {
                let res = valuesArray[valuesArray.length-1]
                console.log('res++::')
                console.log(res)
                return res
            }
            return false
        },

        // taskHasImage(task) {
        //     if (typeof task['filenameData'] == "undefined") return false
        //     if (task['filenameData'] === null) return false
        //     if (typeof task['filenameData'].image_url == "undefined") return false
        //     if (typeof task['filenameData'].image_url == "string") return true
        //     return true
        // },

        getFileSizeAsString: function (file_size) {
            if (parseInt(file_size) < 1024) {
                return file_size + 'b'
            }
            if (parseInt(file_size) < 1024 * 1024) {
                return Math.floor(file_size / 1024) + 'kb'
            }
            return Math.floor(file_size / (1024 * 1024)) + 'mb'
        },

        convertObjectToArray: function (obj) {
            var result = Object.keys(obj).map(function (key) {
                return [Number(key), obj[key]]
            })
            return result
        },

        getArrayKeyValues: function (dataArray, key) {
            let retArray = []
            dataArray.map((nextItem) => {
                if (typeof nextItem[key] !== 'undefined') {
                    retArray[retArray.length] = nextItem[key]
                }
            })
            return retArray
        },

        concatStrings: function (dataArray, splitter) {
            var ret = ''
            var L = dataArray.length
            let resArray = []
            for (let I = 0; I < L; I++) {
                var next_string = this.trim(dataArray[I])
                if (typeof next_string === 'string') {
                    if (next_string.length > 0) {
                        resArray[resArray.length] = next_string
                    }
                }
            }
            L = resArray.length
            resArray.map((next_string, index) => {
                next_string = this.trim(next_string)
                if (typeof next_string === 'string') {
                    if (next_string) {
                        if (L === index + 1) {
                            ret = ret + next_string
                        } else {
                            ret = ret + next_string + splitter
                        }
                    } // if ( next_string ) {
                }
            })
            return ret
        },


        getClone: function (obj) {
            let copy = JSON.parse(JSON.stringify(obj))
            return copy
        },

        clearTags: function (str) {
            if (typeof str != "string") return ""
            return str.replace(/<\/?[^>]+(>|$)/g, "")
        },

        isValidJsonString(str) {
            try {
                JSON.parse(str)
            } catch (e) {
                return false
            }
            return true
        },

        trim: function (str) {
            if (typeof str != "string") return ""
            return str.replace(/^\s+|\s+$/gm, '')
        },


        getVueVersion() {
            return Vue.version
        },

        noWrapString(str) {
            return this.replaceAll(str, ' ', '&nbsp;')
        },

        replaceAll(str, search, replacement) {
            return str.replace(new RegExp(search, 'g'), replacement)
        },

        clearErrorLabel(s, dataContainer) {
            if (typeof s === 'undefined') return ''
            return s.replace(dataContainer, '').replace(/_/g, ' ')
        },

        concatStr: function (str, maxStrLengthInListing) {
            if (typeof str === 'undefined') str = ''
            if (str.length > maxStrLengthInListing) {
                return str.slice(0, maxStrLengthInListing) + '...'
            }
            return str
        },

        getKeyByValue(object, value) {
            if (typeof object[value] === 'undefined') return ''
            return object[value]
        },

        moneyFormat(price) {
            if (typeof price === 'undefined' || typeof price === 'object') {
                price = 0
            }
            if (typeof price === 'string') {
                price = parseFloat(price)
            }
            return '$' + price.toFixed(2)
        },

        getHeaderIcon(icon) {
            let retIcon = ''
            settingsAwesomeFontLabels.map((nextSettingsAwesomeFontLabel) => {
                if (nextSettingsAwesomeFontLabel.code === icon) {
                    retIcon = nextSettingsAwesomeFontLabel.font
                    return retIcon
                }
            })
            return retIcon
        },

        momentDatetime(datetime, datetimeFormat, defaultVal) {
            if (typeof datetime === 'undefined' || datetime === null) {
                if (typeof defaultVal !== 'undefined' && defaultVal != null) {
                    return defaultVal
                }
                return ''
            }
            if (typeof datetime === 'object') {
                return moment(datetime).format(datetimeFormat)
            }
            if (typeof datetime === 'string') {
                if (datetimeFormat === '') return ''
                let dt = moment(String(datetime))
                return dt.format(datetimeFormat)
            } // if (typeof datetime === "string") {
            return ''
        }, // momentDatetime(datetime, datetimeFormat, defaultVal) {

        timeInAgoFormat: function (value) {
            if (value == null || typeof value === 'undefined') return
            return this.Capitalize(moment(value).fromNow())
        },

        getDictionaryLabel(value, selectionsList, defaultValue) {
            if (typeof defaultValue === 'undefined') defaultValue = ''
            if (typeof selectionsList === 'undefined') return defaultValue
            var ret = defaultValue
            selectionsList.map((nextSelection/*, index*/) => {
                if (nextSelection.code === value) {
                    ret = nextSelection.label
                }
            })
            return ret
        }, // getDictionaryLabel( value, selectionsList, defaultValue ) {

        Uppercase: function (string) {
            if (typeof string != "string") return ""
            return string.toUpperCase()
        },

        lowerCase: function (string) {
            if (typeof string != "string") return ""
            return string.toLowerCase(0)
        },

        Capitalize: function (string) {
            if (typeof string != "string") return ""
            return string.charAt(0).toUpperCase() + string.slice(1)
        },

        clearErrorMessage(s) {
            if (typeof s === 'undefined') return ''
            return this.Capitalize(s.replace(/_/g, ' '))
        },

        isSameDay(dat_1, dat_2) {
            let m_1 = dat_1.getMonth() + 1 // getMonth() is zero-based
            let d_1 = dat_1.getDate()
            let y_1 = dat_1.getFullYear()
            let m_2 = dat_2.getMonth() + 1 // getMonth() is zero-based
            let d_2 = dat_2.getDate()
            let y_2 = dat_2.getFullYear()
            console.log('isSameDay ::')
            console.log((m_1 == m_2 && d_1 == d_2 && y_1 == y_2))

            return (m_1 == m_2 && d_1 == d_2 && y_1 == y_2)
        },

        addDaysToDate(add_days, current_date) {
            if (typeof current_date === 'undefined') {
                current_date = new Date()
            }
            current_date.setDate(current_date.getDate() + add_days)
            return current_date
        },

    }

}
