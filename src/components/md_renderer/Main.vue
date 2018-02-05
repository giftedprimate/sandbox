<template>
    <div>
      <b-alert :show="dismissCountDown"
               dismissible
               :variant="alertVariant"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged"
               class="animated bounceInRight">
        <p>{{ alertHeading }}</p>
        <hr>
        <p><strong>{{ alertMessage }}</strong></p>
      </b-alert>
      <b-jumbotron class="config-jumbotron" header="Create config" v-if="editConfig">
        <b-list-group>
          <b-list-group-item :class="fillMeInsColor">Replace all the &lt;FILL ME IN&gt; placeholders</b-list-group-item>
          <b-list-group-item :class="handleColor">Replace &lt;YOUR GITHUB HANDLE&gt; with valid handle</b-list-group-item>
          <b-list-group-item :class="repoColor">Replace &lt;REPO NAME&gt; with repo name</b-list-group-item>
          <b-list-group-item :class="jsonColor">Must be valid JSON</b-list-group-item>
          <b-list-group-item>Click "Submit" to load page and save config to local storage</b-list-group-item>
        </b-list-group>
        <b-button @click="computeData()">Submit</b-button>
        <b-button @click="newConfig()">Reset Config</b-button>
        <b-button @click="copyConfig()">Copy Config to Clipboard</b-button>
        <b-form-textarea id="textarea1"
                         :state="testConfig()"
                         v-model="config"
                         :rows="31"
                         :max-rows="100">
        </b-form-textarea>
      </b-jumbotron>
      <b-button :class="'config-button'" @click="editConfiguration()">{{ editConfig ? 'Close Config' : 'Edit Config' }}</b-button>
      <jumbotron v-if="builtPage === null" header="Please fill out config" lead="Click Edit Config at the top of the page">
        <b-card img-src="../../static/markdown.png"
                img-alt="Markdown Symbol"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
        </b-card>
      </jumbotron>
      <div id="md-app" class="text-center fadeIn" v-else>
        <div id="text-zone" class="row">
          <div id="pages" cols="12">
              <div
                v-for="(id, ind) in hTagIds"
                :key="'social:' + ind"
                class="social-zone"
                :id="'social-' + id"
                @click="scrollToo(id)"
              >
                <Social
                  :config="config"
                  :id="id"
                ></Social>
                <span>
                  <i class="fa fa-link"
                     title="Clipboard"
                     @click="copyClipboard(id)"
                  ></i>
                  <!--v-b-tooltip.hover-->
                </span>
              </div>
            <div id="page-actual">
              <b-col
                v-for="(hp, ind) in headingPage"
                class="page heading medium-font small-font tiny-font"
                :class="'heading-' + ind"
                :key="'heading-' + ind"
                v-html="hp"
              >
              </b-col>
              <b-col
                v-for="(ip, ind) in introductionPage"
                class="page introduction medium-font small-font tiny-font"
                :class="'introduction-' + ind"
                :key="'introduction-' + ind"
                v-html="ip"
              >
              </b-col>
              <b-col
                v-for="(rp, ind) in revisionHistoryPage"
                class="page revision medium-font small-font tiny-font"
                :class="'revision-' + ind"
                :key="'revision-' + ind"
                v-html="rp"
              >
              </b-col>
              <b-col
                v-for="(tp, ind) in tableOfContentsPage"
                class="page table-of-contents medium-font small-font tiny-font"
                :class="'table-of-contents-' + ind"
                :key="'table-of-contents-' + ind"
                v-html="tp"
              >
              </b-col>
              <b-col
                v-for="(mp, ind) in mainContent"
                class="page main-content medium-font small-font tiny-font"
                :class="'page-' + ind"
                :key="'page:' + ind"
                v-html="mp"
              ></b-col>
            </div>
          </div>
          <text id="clipboardTextDummy"></text>
          <RightBar :threatModel="threatModel"></RightBar>
        </div>
      </div>
    </div>
</template>
<script>
import Social from './Social'
import RightBar from './RightBar'
import utils from './services/utils'
import BuildPage from './services/BuildPage'
import axios from 'axios'
import base64 from 'base-64'
import $ from 'jquery'
import { _ } from 'underscore'
import isJson from 'is-json'
import Pagination from 'bootstrap-vue/es/components/pagination/pagination'
import Jumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'

export default {
  name: 'Main',
  beforeMount () {
    const localConfig = localStorage.getItem('CONFIG')
    if (localConfig !== null) {
      const pC = JSON.parse(localConfig)
      this.config = JSON.stringify(_.omit(pC, 'TM_MARKDOWN'), null, 4)
      this.pageConfig = pC
      this.editConfig = false
      this.buildPages()
    }
  },
  mounted () {
    this.testConfig()
  },
  data () {
    return {
      fillMeInsSuccess: false,
      repoSuccess: false,
      handleSuccess: false,
      jsonSuccess: false,
      pageConfig: null,
      builtPage: null,
      popoverOpen: false,
      hTagIds: [],
      alertHeading: '',
      alertVariant: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      threatModel: '',
      config: ` {
        "COMPANY_NAME" : "<FILL ME IN>",
        "PUBLISH_DATE" : "<FILL ME IN>",
        "DESCRIPTION" : "<FILL ME IN>",
        "TITLE" : "<FILL ME IN>",
        "FAVICON" : "<FILL ME IN>",
        "QUOTE" : "<FILL ME IN>",
        "HASHTAGS" : "<FILL ME IN>",
        "MAIN_IMAGE" : "<FILL ME IN>",
        "REPO_URL" : "https://api.github.com/repos/<YOUR GITHUB HANDLE>/<REPO NAME>/readme",
        "STYLE" : {
          "heading-page-background-color" : "#fff",
          "heading-page-h1-color" : "#2c3e50",
          "heading-page-h2-color" : "#2c3e50",
          "heading-page-h3-color" : "#f5922f",
          "heading-page-h4-color" : "#2c3e50",
          "heading-page-jumbotron-color" : "#2c3e50",
          "page-background-color" : "#fff",
          "page-color" : "#2c3e50",
          "page-h1-color" : "#f7931a",
          "page-h2-color" : "#5b5b5b",
          "page-h3-color" : "#2c3e50",
          "page-h4-color" : "#2c3e50",
          "page-bold-color" : "#2c3e50",
          "page-page-header-background-color" : "#fff2ce",
          "page-page-header-color" : "#2c3e50",
          "page-page-footer-background-color" : "#fff2ce",
          "page-page-footer-color" : "#f7931a",
          "page-page-footer-resources-color" : "#f7931a"
        }
      }`,
      editConfig: true,
      alertMessage: ''
    }
  },
  computed: {
    testJson () {
      return isJson(this.config)
    },
    fillMeInsColor () {
      return this.fillMeInsSuccess ? 'text-success' : 'text-danger'
    },
    repoColor () {
      return this.repoSuccess ? 'text-success' : 'text-danger'
    },
    handleColor () {
      return this.handleSuccess ? 'text-success' : 'text-danger'
    },
    jsonColor () {
      return this.jsonSuccess ? 'text-success' : 'text-danger'
    },
    headingPage () {
      return this.builtPage.headingPage
    },
    introductionPage () {
      return this.builtPage.introduction
    },
    revisionHistoryPage () {
      return this.builtPage.revisionHistory
    },
    tableOfContentsPage () {
      return this.builtPage.tableOfContents
    },
    mainContent () {
      return this.builtPage.mainContent
    }
  },
  methods: {
    missingAlert () {
      let body = ''
      if (!this.fillMeInsSuccess) body = body + '<FILL ME IN>'
      if (!this.handleSuccess) body = body + '<YOUR GITHUB HANDLE>'
      if (!this.repoSuccess) body = body + '<REPO NAME>'
      if (!this.jsonSuccess) body = body + 'Invalid JSON'
      this.showAlert('Your missing a few things...', body, 'danger', 20)
    },
    copyConfig () {
      if (this.testConfig()) {
        const copyText = document.getElementById('textarea1')
        copyText.select()
        document.execCommand('Copy')
        this.showAlert(copyText.value, 'Copied to clipboard!', 'success', 5)
      } else {
        this.missingAlert()
      }
    },
    editConfiguration () {
      this.editConfig = !this.editConfig
    },
    testRepo () {
      return _.values(_.pick(JSON.parse(this.config), 'REPO_URL')).pop().indexOf('<REPO NAME>') < 0
    },
    testHandle () {
      return _.values(_.pick(JSON.parse(this.config), 'REPO_URL')).pop().indexOf('<YOUR GITHUB HANDLE>') < 0
    },
    testFillMeIn (prop) {
      return prop.indexOf('<FILL ME IN>') < 0
    },
    testFillMeIns () {
      const testProps = _.omit(_.pick(JSON.parse(this.config), ['COMPANY_NAME', 'PUBLISH_DATE', 'DESCRIPTION', 'TITLE', 'FAVICON', 'QUOTE', 'HASHTAGS', 'MAIN_IMAGE']), (p) => {
        if (this.testFillMeIn(p)) return p
      })
      this.fillMeInsSuccess = !Object.keys(testProps).length
      return this.fillMeInsSuccess
    },
    testConfig: _.debounce(function () {
      this.jsonSuccess = false
      this.fillMeInsSuccess = this.testFillMeIns()
      this.repoSuccess = this.testRepo()
      this.handleSuccess = this.testHandle()
      this.jsonSuccess = this.testJson
      return this.jsonSuccess && this.fillMeInsSuccess && this.repoSuccess && this.handleSuccess
    }, 300),
    buildPages () {
      const buildPage = new BuildPage(this.pageConfig)
      buildPage.init((built) => {
        this.builtPage = built
        this.processPages()
        this.editConfig = false
      })
    },
    newConfig () {
      this.config = ` {
        "COMPANY_NAME" : "<FILL ME IN>",
        "PUBLISH_DATE" : "<FILL ME IN>",
        "DESCRIPTION" : "<FILL ME IN>",
        "TITLE" : "<FILL ME IN>",
        "FAVICON" : "<FILL ME IN>",
        "QUOTE" : "<FILL ME IN>",
        "HASHTAGS" : "<FILL ME IN>",
        "MAIN_IMAGE" : "<FILL ME IN>",
        "REPO_URL" : "https://api.github.com/repos/<YOUR GITHUB HANDLE>/<REPO NAME>/readme",
        "STYLE" : {
          "heading-page-background-color" : "#fff",
          "heading-page-h1-color" : "#2c3e50",
          "heading-page-h2-color" : "#2c3e50",
          "heading-page-h3-color" : "#f5922f",
          "heading-page-h4-color" : "#2c3e50",
          "heading-page-jumbotron-color" : "#2c3e50",
          "page-background-color" : "#fff",
          "page-color" : "#2c3e50",
          "page-h1-color" : "#f7931a",
          "page-h2-color" : "#5b5b5b",
          "page-h3-color" : "#2c3e50",
          "page-h4-color" : "#2c3e50",
          "page-bold-color" : "#2c3e50",
          "page-page-header-background-color" : "#fff2ce",
          "page-page-header-color" : "#2c3e50",
          "page-page-footer-background-color" : "#fff2ce",
          "page-page-footer-color" : "#f7931a",
          "page-page-footer-resources-color" : "#f7931a"
        }
      }`
      this.editConfig = true
      this.pageConfig = null
      this.builtPage = null
      localStorage.removeItem('CONFIG')
    },
    computeData () {
      if (this.testConfig()) {
        const config = JSON.parse(this.config)
        const REPO_URL = config.REPO_URL
        console.log(REPO_URL)
        axios.get(REPO_URL)
          .then(res => {
            this.pageConfig = config
            const blob = res.data.content
            this.pageConfig.TM_MARKDOWN = base64.decode(blob)
            localStorage.setItem('CONFIG', JSON.stringify(this.pageConfig))
            this.buildPages()
          })
          .catch(console.error)
      } else {
        this.missingAlert()
      }
    },
    copyClipboard (id) {
      const link = window.location.href.split('#')[0] + '#/' + this.threatModel + '#' + id

      const inp = document.createElement('input')
      document.body.appendChild(inp)
      inp.value = link
      inp.select()
      document.execCommand('copy', false)
      inp.remove()

      this.showAlert(link, 'Copied to clipboard!', 'success', 4)
    },
    scrollToo (id) {
      utils.scrollToEle(this, '#' + id)
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert (heading, message, variant, duration) {
      this.alertHeading = heading
      this.alertMessage = message
      this.alertVariant = variant
      this.dismissSecs = duration
      this.dismissCountDown = this.dismissSecs
      this.clearClipData(this.dismissSecs)
    },
    clearClipData (seconds) {
      setTimeout(() => {
        this.clipboardLink = ''
        this.alertMessage = ''
        this.alertVariant = ''
      }, seconds * 1000)
    },
    processPages () {
      const dis = this

      setTimeout(() => {
        const $page = $('.page')

        /*
          * scroll to element if in url
          * */
        const location = window.location.href
        const gotoEle = location.split('#').pop()
        if (gotoEle !== '/' + this.threatModel) {
          utils.scrollToEle(this, '#' + gotoEle)
        }

        /*
          * implements bootstrap img-fluid on all images
          * */
        $page.find('img').addClass('img-fluid')

        /*
          * dynamically creates click handlers for toc a tags
          * */
        const $tableOfContents = $('.table-of-contents')
        $tableOfContents.find('a').on('click', function () {
          const name = $(this).attr('name')
          utils.scrollToEle(dis, '#' + name)
        })

        /*
          * split toc page
          * */

        /*
          * get all htag ids to for popover to be associated with
          * */
        $page.find('h1, h2, h3, h4').each(function () {
          const $ele = $(this)
          const $eleId = $ele.attr('id')
          if ($eleId !== undefined) dis.hTagIds.push($eleId)
        })

        /*
          * adds media queries to elements
          * */
        const hTags = $('.page:not(:first-child) h1, .page:not(:first-child) h2, .page:not(:first-child) h3, .page:not(:first-child) h4')
        hTags.each(function () {
          $(this).attr('class', 'tiny-h-font small-h-font medium-h-font')
        })

        const strongTags = $('strong')
        strongTags.each(function () {
          $(this).attr('class', 'tiny-strong-font small-strong-font medium-strong-font')
        })

        /*
          * implements social buttons when mouse over h tag
          * */
        hTags.each(function () {
          $(this).mouseenter(function () {
            const $ele = $(this)
            const id = $ele.attr('id')
            if (id !== 'heading-page-header') {
              $ele.before(function () {
                const $social = $('#social-' + id)
                $ele.prepend($social)
                $social.css({
                  'display': 'inline-block',
                  'background-color': $ele.css('color'),
                  'margin-right': '10px'
                })
              })
            }
          })
          $(this).mouseleave(function () {
            $(this).find('.social-zone').css({'display': 'none'})
          })
        })
      }, 200)
    }
  },
  components: {
    Jumbotron,
    Pagination,
    Social,
    RightBar
  }
}
</script>

<style>
  @import './css/style.css';
  @import './css/media.css';
</style>
