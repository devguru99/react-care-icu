import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Container from '@mui/material/Container';
import blogsData from '@/utils/blogs';

const cardData = blogsData.slice(2, 6);

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
  description: string;
  authors: AuthorType[];
}

interface CardComponentProps {
  card: CardData;
  isFocused: boolean;
  handleFocus: (index: number) => void;
  handleBlur: () => void;
  cardIndex: number;
}

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
        aspectRatio: '16 / 9',
        borderBottom: '1px solid',
        borderColor: 'divider',
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

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function Latest() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

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
        id="blogs-latest"
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 4 }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div>
          <Typography variant="h1" gutterBottom>
            Latest Articles
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
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              gap: 1,
              overflow: 'auto',
            }}
          >
            <Chip onClick={handleClick} size="medium" label="All" />
            <Chip
              onClick={handleClick}
              size="medium"
              label="Post-ICU Recovery"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
            <Chip
              onClick={handleClick}
              size="medium"
              label="Medication Management"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
            <Chip
              onClick={handleClick}
              size="medium"
              label="Telehealth and Virtual Care"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
            <Chip
              onClick={handleClick}
              size="medium"
              label="Mental and Emotional Health"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
            <Chip
              onClick={handleClick}
              size="medium"
              label="Patient Resources"
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'row',
              gap: 1,
              width: { xs: '100%', md: 'fit-content' },
              overflow: 'auto',
            }}
          >
          </Box>
        </Box>
        <Grid container spacing={2} columns={12}>
          {cardData.map((card, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <CardComponent
                card={card}
                isFocused={focusedCardIndex === index}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                cardIndex={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
