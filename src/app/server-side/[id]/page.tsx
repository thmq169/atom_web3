import { postServices } from '@/services/post.service'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from 'next/link'

const getPost = async (id:string) => {
    const data = await postServices.getPost(id)
    return data
}

const PostDetailServerSide = async ({
    params: { id },
  }: {
    params: { id: string }
  }) => {
    const postDetail = await getPost(id)
    return (
        postDetail && 
            <Card className='mt-4'>
                <CardHeader>
                    <CardTitle>Post detail</CardTitle>
                    <CardDescription>This is post detail using Client Side Rendering</CardDescription>
                </CardHeader>
                <CardContent>
                <Table className="border-[2px] border-secondary">
                    <TableHeader>
                        <TableRow>
                        <TableHead className='w-[100px]'>User ID</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Body</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">{postDetail.userId}</TableCell>
                            <TableCell className="font-medium">{postDetail.id}</TableCell>
                            <TableCell>{postDetail.title}</TableCell>
                            <TableCell>{postDetail.body}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href="/server-side">
                            Back
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
  )
}

export default PostDetailServerSide
