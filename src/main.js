import './style.css'

const grid = document.querySelector('#portfolio-grid')
const projects = [...(grid?.querySelectorAll('[data-project-card]') ?? [])]

const extraImages = {
  'Calculadora para compras': ['/images/web/calculadora.jpg'],
  'Archery Valley VR': ['/images/unity-vr/archery_valley_vr/img4_archery_valley_VR.jpg'],
}

const technologyByCategory = {
  web: 'HTML · CSS · JavaScript',
  'unity-vr': 'Unity · C#',
  design: 'Design gráfico · Identidade visual',
}

const dialog = document.createElement('dialog')
dialog.className = 'project-dialog'
dialog.setAttribute('aria-labelledby', 'project-dialog-title')
dialog.innerHTML = `
  <div class="project-dialog__panel">
    <button class="project-dialog__close" type="button" aria-label="Fechar detalhes do projeto">×</button>
    <div class="project-dialog__content">
      <div class="project-dialog__media"></div>
      <div class="project-dialog__details">
        <p class="project-dialog__category"></p>
        <h2 id="project-dialog-title" class="project-dialog__title"></h2>
        <p class="project-dialog__description"></p>
        <dl class="project-dialog__facts">
          <div><dt>Tecnologias / área</dt><dd class="project-dialog__technology"></dd></div>
          <div><dt>Estado</dt><dd class="project-dialog__status"></dd></div>
        </dl>
        <div class="project-dialog__links"></div>
      </div>
    </div>
  </div>`
document.body.append(dialog)

const closeButton = dialog.querySelector('.project-dialog__close')
const media = dialog.querySelector('.project-dialog__media')
let activeTrigger

function youtubeEmbed(url) {
  try {
    const parsed = new URL(url)
    const id = parsed.hostname.endsWith('youtu.be')
      ? parsed.pathname.slice(1)
      : parsed.searchParams.get('v')
    return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : null
  } catch {
    return null
  }
}

function openProject(card, trigger) {
  const title = card.querySelector('h3')?.textContent.trim() ?? 'Projeto'
  const category = card.querySelector('div > p')?.textContent.trim() ?? ''
  const description = card.querySelector('div > p.leading-relaxed')?.textContent.trim() ?? ''
  const cover = card.querySelector('img')
  if (!cover) return

  const imageSources = [...new Set([cover.getAttribute('src'), ...(extraImages[title] ?? [])].filter(Boolean))]
  const links = [...(card.querySelector('[data-project-links]')?.querySelectorAll('a') ?? [])]
  const videoLink = links.find((link) => youtubeEmbed(link.href))
  const activeImage = document.createElement('img')
  activeImage.className = 'project-dialog__image'
  activeImage.src = imageSources[0]
  activeImage.alt = cover.alt || title
  activeImage.loading = 'eager'
  media.replaceChildren(activeImage)

  if (imageSources.length > 1) {
    const thumbnails = document.createElement('div')
    thumbnails.className = 'project-dialog__thumbnails'
    thumbnails.setAttribute('aria-label', 'Imagens do projeto')
    imageSources.forEach((src, index) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'project-dialog__thumbnail'
      button.setAttribute('aria-label', `Mostrar imagem ${index + 1} de ${imageSources.length}`)
      button.setAttribute('aria-pressed', String(index === 0))
      const image = document.createElement('img')
      image.src = src
      image.alt = ''
      image.loading = 'lazy'
      button.append(image)
      button.addEventListener('click', () => {
        activeImage.src = src
        button.parentElement.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', 'false'))
        button.setAttribute('aria-pressed', 'true')
      })
      thumbnails.append(button)
    })
    media.append(thumbnails)
  }

  if (videoLink) {
    const videoButton = document.createElement('button')
    videoButton.type = 'button'
    videoButton.className = 'project-dialog__video-toggle'
    videoButton.textContent = 'Ver vídeo do projeto'
    videoButton.addEventListener('click', () => {
      const frame = document.createElement('iframe')
      frame.className = 'project-dialog__video'
      frame.src = youtubeEmbed(videoLink.href)
      frame.title = `Vídeo do projeto ${title}`
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      frame.referrerPolicy = 'strict-origin-when-cross-origin'
      frame.allowFullscreen = true
      media.replaceChildren(frame)
      videoButton.textContent = 'Vídeo do projeto'
      videoButton.disabled = true
    })
    media.append(videoButton)
  }

  dialog.querySelector('.project-dialog__category').textContent = category
  dialog.querySelector('.project-dialog__title').textContent = title
  dialog.querySelector('.project-dialog__description').textContent = description
  dialog.querySelector('.project-dialog__technology').textContent = technologyByCategory[card.dataset.category] ?? category
  dialog.querySelector('.project-dialog__status').textContent = /ainda não publicado/i.test(description)
    ? 'Em desenvolvimento · ainda não publicado'
    : links.some((link) => /jogar|ver projeto/i.test(link.textContent))
      ? 'Publicado'
      : 'Projeto de portfólio'

  const linkContainer = dialog.querySelector('.project-dialog__links')
  linkContainer.replaceChildren()
  links.forEach((link) => {
    const action = document.createElement('a')
    action.href = link.href
    action.target = link.target || '_self'
    if (action.target === '_blank') action.rel = 'noopener noreferrer'
    action.className = 'project-dialog__link'
    action.textContent = link.textContent.trim()
    linkContainer.append(action)
  })

  activeTrigger = trigger
  dialog.showModal()
  closeButton.focus()
}

projects.forEach((card, index) => {
  const image = card.querySelector('img')
  const figure = image?.closest('figure')
  if (!image || !figure) return

  card.classList.add('portfolio-project')
  card.style.setProperty('--project-index', index)
  const trigger = document.createElement('button')
  trigger.type = 'button'
  trigger.className = 'portfolio-project__image-button'
  trigger.setAttribute('aria-label', `Ver detalhes de ${card.querySelector('h3')?.textContent.trim() ?? 'projeto'}`)
  figure.replaceWith(trigger)
  trigger.append(image)
  trigger.addEventListener('click', () => openProject(card, trigger))

  const details = card.querySelector(':scope > div')
  const title = details?.querySelector('h3')
  if (details && title) {
    title.id ||= `project-title-${index + 1}`
    const action = document.createElement('button')
    action.type = 'button'
    action.className = 'portfolio-project__action'
    action.textContent = 'Explorar projeto'
    action.setAttribute('aria-label', `Explorar projeto ${title.textContent.trim()}`)
    action.addEventListener('click', () => openProject(card, action))
    details.append(action)
  }
})

closeButton.addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})
dialog.addEventListener('close', () => activeTrigger?.focus())
