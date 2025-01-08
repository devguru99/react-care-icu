import * as React from 'react';
import { JSX } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import blogsData from '@/utils/blogs';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: 'transparent',
  '&:hover': {
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.12)',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
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
      <Typography variant="caption">July 14, 2024</Typography>
    </Box>
  );
}

interface AuthorType {
  name: string;
  avatar: string;
}

interface CardData {
  img: string;
  tag: string;
  title: string;
  slug: string;
  description: string | JSX.Element;
  authors: AuthorType[];
}

interface CardComponentProps {
  card: CardData;
  isFocused: boolean;
  handleFocus: (index: number) => void;
  handleBlur: () => void;
  cardIndex: number;
}

const getRandomItemsExcludingSlug = (
  array: CardData[],
  count: number,
  excludeSlug: string
): CardData[] => {
  const filteredArray = array.filter((item) => item.slug !== excludeSlug);
  const shuffled = [...filteredArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const CardComponent: React.FC<CardComponentProps> = ({
  card,
  isFocused,
  handleFocus,
  handleBlur,
  cardIndex,
}) => (
  <StyledCard
    variant="outlined"
    onFocus={() => handleFocus(cardIndex)}
    onBlur={handleBlur}
    tabIndex={0}
    className={isFocused ? 'Mui-focused' : ''}
  >
    <CardMedia
      component="img"
      alt={card.title}
      image={card.img}
      sx={{
        height: { sm: 'auto', md: '50%' },
        aspectRatio: { sm: '16 / 9', md: '' },
      }}
    />
    <StyledCardContent>
      <Typography gutterBottom variant="caption" component="div">
        {card.tag}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {card.title}
      </Typography>
      <StyledTypography variant="body2" color="text.secondary" gutterBottom>
        {card.description}
      </StyledTypography>
    </StyledCardContent>
    <Author authors={card.authors} />
  </StyledCard>
);

export default function Related() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );
  const { slug } = useParams<{ slug: string }>();

  const cardData = React.useMemo(() => {
    return getRandomItemsExcludingSlug(blogsData, 3, slug || '');
  }, [blogsData, slug]);

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Container
        id="blogs-related"
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div>
          <Typography variant="h1" gutterBottom>
            Related Articles
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            alignItems: { xs: 'start', md: 'center' },
            gap: 4,
            overflow: 'auto',
          }}
        >
        </Box>
        <Grid container spacing={2} columns={12}>
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Link to={`/blog/${card.slug}`} style={{ textDecoration: 'none' }}>
                <CardComponent
                  card={card}
                  isFocused={focusedCardIndex === index}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  cardIndex={index}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={1}
          useFlexGap
          sx={{ width: { xs: '100%', sm: 'auto' }, justifyContent: 'flex-end' }}
        >
          <a
            href="https://www.facebook.com/share/19xRmWeq7p/?mibextid=wwXIfr"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src='/social_facebook.png'
              sx={{
              width: 35,
              height: 35,
              }}
            />
          </a>
          <a
            href="https://x.com/carebeyondicu?s=21"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src='/social_twitter.png'
              sx={{
              width: 35,
              height: 35,
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/carebeyondicu/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src='/social_instagram.png'
              sx={{
              width: 35,
              height: 35,
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/carebeyondicu/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              component="img"
              src='/social_linkedin.png'
              sx={{
              width: 35,
              height: 35,
              }}
            />
          </a>
        </Stack>
      </Box>
    </Container>
  );
}
