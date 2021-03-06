export default http => {
  const article = {}

  article.getAll = ({page, size, sort = ''}) => {
    return http.get('/articles', {
      params: {
        page,
        size,
        sort
      }
    })
  }
  article.getAllByUserId = ({userId, page, size, sort = ''}) => {
    return http.get('/articles', {
      params: {
        page,
        size,
        sort,
        userId
      }
    })
  }

  article.getById = id => {
    return http.get(`/articles/${id}`)
  }

  article.addVote = articleId => {
    return http.post(`/articles/${articleId}/votes`)
  }
  article.deleteVote = articleId => {
    return http.delete(`/articles/${articleId}/votes`)
  }
  article.getVote = articleId => {
    return http.get(`/articles/${articleId}/votes`)
  }

  article.uploadImage = imageData => {
    return http.post('/articles/images', imageData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  article.deleteById = id => {
    return http.delete(`/articles/${id}`)
  }

  article.add = ({title, info, poster, categoryId, content, contentType, tagIds, draftId = null}) => {
    const config = {
      title,
      info,
      poster,
      categoryId,
      content,
      contentType,
      tagIds
    }
    let url = '/articles'
    if (draftId) {
      url += `?draftId=${draftId}`
    }
    return http.post(url, config)
  }

  article.update = ({articleId, title, info, poster, categoryId, content, contentType, tagIds}) => {
    return http.put(`/articles/${articleId}`, {
      title,
      info,
      poster,
      categoryId,
      content,
      contentType,
      tagIds
    })
  }

  article.getAllByCategoryId = ({categoryId, page, size, sort = ''}) => {
    return http.get(`/categories/${categoryId}/articles`, {
      params: {
        page,
        size,
        sort
      }
    })
  }

  article.getAllByTagId = ({tagId, page, size, sort = ''}) => {
    return http.get('/articles', {
      params: {
        page,
        size,
        sort,
        tagId
      }
    })
  }
  return article
}
