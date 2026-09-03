type LenisLike = {
  scrollTo: (target: HTMLElement | string | number, options?: { offset?: number }) => void;
};

let lenis: LenisLike | null = null;

export function setLenis(instance: LenisLike | null) {
  lenis = instance;
}

export function scrollToId(id: string, offset = -68) {
  const el = document.getElementById(id.replace(/^#/, ''));
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: 'auto' });
}
