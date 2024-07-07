import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { postServices } from "@/services/post.service"
import { PostType } from "@/types"
import Link from "next/link"

const getPosts = async () => {
    const data = await postServices.getAllPost()
    return data
}

const PostServerSide = async () => {
    const posts:PostType[] = await getPosts()
    return (
        <Table className="border-[2px] border-secondary mt-4">
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">User ID</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Body</TableHead>
                    <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.userId}</TableCell>
                        <TableCell className="font-medium">{post.id}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.body}</TableCell>
                        <TableCell>
                            <Button>
                                <Link href={`/server-side/${post.id}`}>
                                    Detail
                                </Link>
                            </Button>
                    </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{posts.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
    )
}

export default PostServerSide
