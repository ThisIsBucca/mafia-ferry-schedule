import { useForm } from "react-hook-form"
import { useArticles } from "../../hooks/useArticles"

export function ArticleEditor({ article, onClose }) {
  const { createArticle, updateArticle } = useArticles()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: article || {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: ""
    }
  })

  const onSubmit = async (data) => {
    try {
      if (article) {
        await updateArticle.mutateAsync({ id: article.id, ...data })
      } else {
        await createArticle.mutateAsync(data)
      }
      onClose()
    } catch (error) {
      console.error("Failed to save article:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Excerpt</label>
        <textarea
          {...register("excerpt", { required: "Excerpt is required" })}
          className="w-full rounded-lg border p-2"
          rows={2}
        />
        {errors.excerpt && (
          <span className="text-sm text-red-500">{errors.excerpt.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          {...register("content", { required: "Content is required" })}
          className="w-full rounded-lg border p-2"
          rows={10}
        />
        {errors.content && (
          <span className="text-sm text-red-500">{errors.content.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="w-full rounded-lg border p-2"
        >
          <option value="">Select category...</option>
          <option value="transport">Transport</option>
          <option value="news">News</option>
          <option value="events">Events</option>
        </select>
        {errors.category && (
          <span className="text-sm text-red-500">{errors.category.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Author</label>
        <input
          {...register("author", { required: "Author is required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.author && (
          <span className="text-sm text-red-500">{errors.author.message}</span>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg border hover:bg-muted"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {article ? "Update" : "Create"} Article
        </button>
      </div>
    </form>
  )
} 