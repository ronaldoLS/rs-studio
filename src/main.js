import './style.css'

const projects = {
  calculadora: {
    title: 'Calculadora para compras', category: 'Desenvolvimento web',
    description: 'Aplicação web para registar produtos e preços durante as compras, acompanhar o valor acumulado e ajudar a controlar o orçamento.',
    media: [{ type: 'image', src: '/images/web/calculadoraMercado.jpg', alt: 'Interface da Calculadora para compras' }],
    links: [
      { label: 'Abrir projeto', href: 'https://ronaldols.github.io/calculadora_de_mercado/' },
      { label: 'Ver código no GitHub', href: 'https://github.com/ronaldoLS/calculadora_de_mercado' },
    ],
  },
  simon: {
    title: 'Jogo Simon', category: 'Desenvolvimento web',
    description: 'Jogo de memória que desafia o jogador a observar e repetir sequências de cores, testando a atenção e a capacidade de memorização.',
    media: [{ type: 'image', src: '/images/web/jogoSimon.jpg', alt: 'Interface do jogo Simon' }],
    links: [
      { label: 'Abrir jogo', href: 'https://ronaldols.github.io/jogo_simon/' },
      { label: 'Ver código no GitHub', href: 'https://github.com/ronaldoLS/jogo_simon' },
    ],
  },
  archery: {
    title: 'Archery Valley VR', category: 'Unity · Realidade virtual',
    description: 'Projeto de tiro com arco em realidade virtual para Meta Quest 3, com mecânicas de disparo de flechas, pontuação e interação com alvos. Ainda não publicado.',
    media: [
      { type: 'image', src: '/images/unity-vr/archery_valley_vr/img1_archery_valley_VR.jpg', alt: 'Archery Valley VR em funcionamento' },
      { type: 'image', src: '/images/unity-vr/archery_valley_vr/img4_archery_valley_VR.jpg', alt: 'Outra imagem de Archery Valley VR' },
      { type: 'video', id: '2lb_ajwBe4w', label: 'Vídeo de Archery Valley VR' },
    ],
    links: [{ label: 'Ver vídeo no YouTube', href: 'https://youtu.be/2lb_ajwBe4w' }],
  },
  'fuel-rush': {
    title: 'Fuel Rush', category: 'Unity · Jogo',
    description: 'Jogo de condução numa estrada infinita, no qual o jogador percorre a maior distância possível enquanto acompanha o combustível disponível.',
    media: [
      { type: 'image', src: '/images/unity-vr/Fuel_Rush/img1_fuel_rush.jpg', alt: 'Imagem de gameplay de Fuel Rush' },
      { type: 'video', id: 'ixDtFMfvOJI', label: 'Vídeo de Fuel Rush' },
    ],
    links: [
      { label: 'Jogar no Unity Play', href: 'https://play.unity.com/en/games/e6a2cc75-a9f7-4a47-91e0-637948b8457e/fuel-rush-endless-drive' },
      { label: 'Ver vídeo no YouTube', href: 'https://youtu.be/ixDtFMfvOJI' },
    ],
  },
  'guess-order': {
    title: 'Guess the Order', category: 'Unity · Jogo',
    description: 'Jogo de lógica em que o jogador precisa descobrir a ordem correta dos elementos, recorrendo à observação e ao raciocínio.',
    media: [
      { type: 'image', src: '/images/unity-vr/guess_the_order/img1_guess_the_order.jpg', alt: 'Imagem de gameplay de Guess the Order' },
      { type: 'video', id: 'zJWEgvL1z9c', label: 'Vídeo de Guess the Order' },
    ],
    links: [
      { label: 'Jogar no Unity Play', href: 'https://play.unity.com/en/games/742d21e0-d0a6-445a-b91e-4c492e81f47f/guess-the-order' },
      { label: 'Ver vídeo no YouTube', href: 'https://youtu.be/zJWEgvL1z9c' },
    ],
  },
  savana: {
    title: 'Savana', category: 'Design gráfico · Identidade visual',
    description: 'Criação de logótipo para a Savana, com uma proposta visual desenvolvida para representar a identidade do projeto.',
    media: [{ type: 'image', src: '/images/design/logo_savana.jpg', alt: 'Logótipo Savana', fit: 'contain' }], links: [],
  },
  'tio-marlos': {
    title: 'Barbearia Tio Marlos', category: 'Design gráfico · Identidade visual',
    description: 'Desenvolvimento de logótipo para a Barbearia Tio Marlos, com uma identidade gráfica alinhada com o nome e o conceito da marca.',
    media: [{ type: 'image', src: '/images/design/logo_barbearia_tio_marlos.jpg', alt: 'Logótipo Barbearia Tio Marlos', fit: 'contain' }], links: [],
  },
  sallasinfor: {
    title: 'Sallasinfor', category: 'Design gráfico · Identidade visual',
    description: 'Criação de logótipo para a Sallasinfor, com foco numa identidade visual própria para a marca.',
    media: [{ type: 'image', src: '/images/design/logo_sallasinfor.jpg', alt: 'Logótipo Sallasinfor', fit: 'contain' }], links: [],
  },
  'quarteto-art': {
    title: 'Quarteto Art', category: 'Design gráfico · Identidade visual',
    description: 'Desenvolvimento de logótipo para o Quarteto Art, criando uma identidade visual associada ao projeto musical.',
    media: [{ type: 'image', src: '/images/design/logo_quarteto_art.jpg', alt: 'Logótipo Quarteto Art', fit: 'contain' }], links: [],
  },
}

const dialog = document.querySelector('#project-modal')
const mediaStage = document.querySelector('#project-modal-media')
const thumbnails = document.querySelector('#project-modal-thumbnails')
const closeButton = dialog.querySelector('[data-modal-close]')
let opener = null
let previousScrollStyles = null

function selectMedia(project, index) {
  const media = project.media[index]
  mediaStage.replaceChildren()

  if (media.type === 'video') {
    mediaStage.classList.add('aspect-video', 'bg-neutral-950')
    const frame = document.createElement('iframe')
    frame.src = `https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1&rel=0`
    frame.title = media.label
    frame.className = 'absolute inset-0 h-full w-full scale-[1.02] border-0'
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    frame.referrerPolicy = 'strict-origin-when-cross-origin'
    frame.allowFullscreen = true
    mediaStage.append(frame)
  } else {
    mediaStage.classList.remove('aspect-video', 'bg-neutral-950')
    const image = document.createElement('img')
    image.src = media.src
    image.alt = media.alt
    image.className = 'block max-h-[70dvh] max-w-full object-contain' + (media.fit === 'contain' ? ' bg-neutral-100' : '')
    mediaStage.append(image)
  }

  thumbnails.querySelectorAll('button').forEach((button, buttonIndex) => {
    button.setAttribute('aria-pressed', String(buttonIndex === index))
  })
}

function openProject(id, trigger) {
  const project = projects[id]
  if (!project) return

  opener = trigger
  document.querySelector('#project-modal-title').textContent = project.title
  document.querySelector('#project-modal-category').textContent = project.category
  document.querySelector('#project-modal-description').textContent = project.description
  const links = document.querySelector('#project-modal-links')
  links.replaceChildren()
  for (const item of project.links) {
    const link = document.createElement('a')
    link.href = item.href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.textContent = `${item.label} ↗`
    link.className = 'underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4'
    links.append(link)
  }

  thumbnails.replaceChildren()
  thumbnails.hidden = project.media.length <= 1
  project.media.forEach((media, index) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'relative h-20 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black aria-pressed:border-black'
    button.setAttribute('aria-label', media.type === 'video' ? `Selecionar vídeo: ${media.label}` : `Selecionar imagem ${index + 1}: ${media.alt}`)
    button.setAttribute('aria-pressed', 'false')
    button.addEventListener('click', () => selectMedia(project, index))

    const image = document.createElement('img')
    image.src = media.type === 'video' ? `https://i.ytimg.com/vi/${media.id}/hqdefault.jpg` : media.src
    image.alt = ''
    image.loading = 'lazy'
    image.className = 'h-full w-full object-cover'
    button.append(image)
    if (media.type === 'video') {
      const badge = document.createElement('span')
      badge.className = 'absolute inset-0 grid place-items-center bg-black/30 text-2xl text-white'
      badge.setAttribute('aria-hidden', 'true')
      badge.textContent = '▶'
      button.append(badge)
    }
    thumbnails.append(button)
  })

  selectMedia(project, 0)
  previousScrollStyles = {
    body: document.body.style.overflow,
    document: document.documentElement.style.overflow,
  }
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  dialog.showModal()
}

document.querySelectorAll('[data-project-id]').forEach((trigger) => {
  trigger.addEventListener('click', () => openProject(trigger.dataset.projectId, trigger))
})

closeButton.addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})
dialog.addEventListener('close', () => {
  mediaStage.replaceChildren()
  if (previousScrollStyles) {
    document.body.style.overflow = previousScrollStyles.body
    document.documentElement.style.overflow = previousScrollStyles.document
    previousScrollStyles = null
  }
  opener?.focus()
})
const categoryFilters = document.querySelectorAll('[data-category-filter]')
const projectCards = document.querySelectorAll('#portfolio-grid [data-category]')

categoryFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.categoryFilter
    categoryFilters.forEach((button) => {
      button.setAttribute('aria-pressed', String(button === filter))
    })
    projectCards.forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category
    })
  })
})
const revealCards = document.querySelectorAll('#servicos .grid article, #processo .grid article')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (revealCards.length && 'IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  revealCards.forEach((card) => {
    card.setAttribute('data-scroll-reveal', '')
    revealObserver.observe(card)
  })
  document.documentElement.classList.add('motion-reveal')
}
