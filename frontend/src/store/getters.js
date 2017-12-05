const getters = {
  currentUser: state => state.currentUser,
  currentUserID: state => state.currentUserID,
  authed: state => state.authed,
  nexturl: state => state.nexturl,
  // ruts
  allRuts: state => state.rut.allRuts,
  totalRuts: state => state.rut.totalRuts,
  currentPage: state => state.rut.currentPage,
  currentRuts: state => state.rut.currentRuts,
  maxPage: state => state.rut.maxPage,
  perPage: state => state.rut.perPage,
  allTags: state => state.rut.allTags,
  showTags: state => state.rut.showTags,
  rutDetail: state => state.rut.rutDetail,
  tagDetail: state => state.rut.tagDetail,
  // Clip
  allClips: state => state.clip.allClips,
  totalClips: state => state.clip.totalClips,
  currentP: state => state.clip.currentP,
  currentClips: state => state.clip.currentClips,
  maxP: state => state.clip.maxP,
  perP: state => state.clip.perP,
  // Demand
  allDemands: state => state.demand.allDemands,
  totalDemands: state => state.demand.totalDemands,
  currentD: state => state.demand.currentD,
  currentDemands: state => state.demand.currentDemands,
  maxD: state => state.demand.maxD,
  perD: state => state.demand.perD,
  // item & reviews
  allItems: state => state.item.allItems,
  totalItems: state => state.item.totalItems,
  currentItems: state => state.item.currentItems,
  currentItem: state => state.item.currentItem,
  allReviews: state => state.item.allReviews,
  currentReviews: state => state.item.currentReviews,
  currentR: state => state.item.currentR,
  maxR: state => state.item.maxR,
  inRuts: state => state.item.inRuts
}

export default getters
