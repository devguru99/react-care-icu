import * as React from 'react';
import { JSX } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useParams } from 'react-router-dom';
import blogsData from '@/utils/blogs';

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">Published: July 14, 2024</Typography>
    </Box>
  );
}

export default function SingleBlog() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = React.useState<{
    img: string;
    tag: string;
    title: string;
    slug: string;
    description: string | JSX.Element;
    authors: { name: string; avatar: string }[];
  } | null>(null);

  React.useEffect(() => {
    const foundBlog = blogsData.find((b) => b.slug === slug);
    setBlog(foundBlog || null);
  }, [slug]);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <Box
      id="blog-post"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 3 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' } }}
        >
          <Typography gutterBottom variant="caption" component="div">
            {blog.tag}
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '90%' } }}
        >
          <Typography
              variant="h2"
              sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
          >
              {blog.title}
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' }, pt: 2 }}
        >
          <Author authors={blog.authors} />
        </Stack>
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' }, pt: 2 }}
        >
          <Box
              component="img"
              src={blog.img}
              sx={{
                width: {xs: '100%', md:'900px'},
                height: {xs: 'auto', md:'auto'},
                borderRadius: 2,
              }}
              alt={blog.title}
            />
        </Stack>
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'left', width: { xs: '100%', sm: '100%' }, pt: 2 }}
        >
          <Typography gutterBottom variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </Stack>
        
      </Container>
    </Box>
  );
}
