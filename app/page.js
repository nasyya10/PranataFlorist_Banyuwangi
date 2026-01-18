'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { ButtonVariant, CardVariant } from 'styled-pasya';

// ========== HEADER STYLED COMPONENTS ==========
const Header = styled.header`
  background: linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)),
    url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&h=200&fit=crop');
  background-size: cover;
  background-position: center;
  padding: 1.2rem 2rem;
  border-bottom: 3px solid #FF69B4;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(255, 105, 180, 0.2);
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  color: #FF1493;
  margin: 0;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #FF1493;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #C71585;
    transform: translateY(-2px);
  }
`;

const HeaderButton = styled.button`
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 20, 147, 0.4);
  transition: all 0.3s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 20, 147, 0.5);
  }
`;

// Burger Menu Button
const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 200;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: #FF1493;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`;

// Mobile Navigation Overlay
const MobileNav = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  z-index: 150;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`;

const MobileNavLink = styled.button`
  background: none;
  border: none;
  color: #FF1493;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #C71585;
    transform: scale(1.1);
  }
`;

const MobileNavButton = styled.button`
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1rem;
`;

// ========== PAGE STYLED COMPONENTS ==========
const Main = styled.main`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 80px 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #C71585 100%);
  color: white;
  padding: 120px 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #FF1493;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #C71585 0%, #FF1493 100%);
  color: white;
  padding: 100px 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

// ========== CUSTOM FOOTER ==========
const Footer = styled.footer`
  background: linear-gradient(135deg, #FF1493 0%, #C71585 100%);
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p, a {
    color: rgba(255,255,255,0.9);
    font-size: 0.95rem;
    line-height: 1.8;
    margin: 0.3rem 0;
  }

  a {
    text-decoration: none;
    display: block;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.2);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.9;
`;

// ========== PROFILE SECTION ==========
const ProfileSection = styled.section`
  padding: 80px 2rem;
  background: #fff;
`;

const ProfileContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(255, 20, 147, 0.25);
  border: 4px solid #FF69B4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileText = styled.div`
  h2 {
    font-size: 2.2rem;
    color: #FF1493;
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    color: #555;
    line-height: 1.9;
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #FF1493;
    font-weight: 600;
  }
`;

// ========== TESTIMONIAL SECTION ==========
const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(255, 20, 147, 0.15);
  border: 2px solid #FFB6C1;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(255, 20, 147, 0.25);
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0;
    color: #FF1493;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: #888;
  }
`;

const StarRating = styled.div`
  color: #FFD700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

// ========== DATA ==========
const PRODUCTS = [
  {
    title: 'Wedding Bouquet',
    description: 'Buket pernikahan cantik dengan bunga segar',
    image: 'https://i.pinimg.com/736x/5a/aa/d2/5aaad243a6cc3e7e3c1f6669b50b260d.jpg',
    price: 'Rp 450.000',
    rating: '4.8'
  },
  {
    title: 'Birthday Arrangement',
    description: 'Karangan bunga spesial untuk ulang tahun',
    image: 'https://i.pinimg.com/1200x/9a/0c/ef/9a0cefcf58452b9640b6c75409a7712e.jpg',
    price: 'Rp 350.000',
    rating: '4.7'
  },
  {
    title: 'Sympathy Flowers',
    description: 'Bunga untuk ucapan turut berduka cita',
    image: 'https://i.pinimg.com/1200x/5e/df/10/5edf1020d58929c0279c41057106dad0.jpg',
    price: 'Rp 405.000',
    rating: '4.8'
  },
  {
    title: 'Anniversary Special',
    description: 'Bunga romantis untuk hari anniversary',
    image: 'https://i.pinimg.com/736x/b2/18/31/b21831e86f61b773c2135ec4ea8476ce.jpg',
    price: 'Rp 600.000',
    rating: '4.9'
  },
  {
    title: 'Table Centerpiece',
    description: 'Dekorasi meja dengan bunga segar',
    image: 'https://i.pinimg.com/1200x/45/b2/80/45b280be3c38ee26e7c4d5adf853f0fb.jpg',
    price: 'Rp 162.000',
    rating: '4.6'
  }
];

const TESTIMONIALS = [
  {
    name: 'Sarah Wijaya',
    role: 'Pelanggan Wedding',
    text: 'Bunga untuk pernikahan saya sangat indah! Tim Pranata Florist sangat profesional dan hasilnya melebihi ekspektasi.',
    rating: 5
  },
  {
    name: 'Budi Santoso',
    role: 'Pelanggan Anniversary',
    text: 'Sudah langganan dari 3 tahun lalu. Kualitas bunga selalu fresh dan pengiriman selalu tepat waktu.',
    rating: 5
  },
  {
    name: 'Dewi Lestari',
    role: 'Pelanggan Birthday',
    text: 'Karangan bunga untuk ulang tahun ibu sangat cantik. Ibu sangat senang! Terima kasih Pranata Florist.',
    rating: 5
  }
];

// ========== COMPONENT ==========
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContact = () => {
    alert('Hubungi Kami:\n\nTelepon: 0821 4448 2551\nEmail: info@pranataflorist.com\nAlamat: Jl. Jaksa Agung Suprapto No.131, Mojopanggung, Kec. Giri, Kabupaten Banyuwangi, Jawa Timur 68425');
  };

  return (
    <Main>
      {/* MOBILE NAV OVERLAY */}
      <MobileNav $isOpen={menuOpen}>
        <MobileNavLink onClick={() => scrollTo('beranda')}>Beranda</MobileNavLink>
        <MobileNavLink onClick={() => scrollTo('produk')}>Produk</MobileNavLink>
        <MobileNavLink onClick={() => scrollTo('tentang')}>Tentang</MobileNavLink>
        <MobileNavLink onClick={() => scrollTo('kontak')}>Kontak</MobileNavLink>
        <MobileNavButton onClick={() => { setMenuOpen(false); scrollTo('kontak'); }}>Beli Sekarang</MobileNavButton>
      </MobileNav>

      {/* HEADER */}
      <Header>
        <HeaderContent>
          <Logo onClick={() => scrollTo('beranda')}>PRANATA FLORIST</Logo>
          <Nav>
            <NavLink onClick={() => scrollTo('beranda')}>Beranda</NavLink>
            <NavLink onClick={() => scrollTo('produk')}>Produk</NavLink>
            <NavLink onClick={() => scrollTo('tentang')}>Tentang</NavLink>
            <NavLink onClick={() => scrollTo('kontak')}>Kontak</NavLink>
          </Nav>
          <HeaderButton onClick={() => scrollTo('kontak')}>Beli Sekarang</HeaderButton>
          <BurgerButton className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerButton>
        </HeaderContent>
      </Header>

      {/* HERO */}
      <HeroSection id="beranda">
        <HeroTitle>Pranata Florist</HeroTitle>
        <HeroSubtitle>
          Bunga Segar untuk Setiap Momen Spesial Anda.
          Wedding, ulang tahun, anniversary, dan berbagai acara spesial lainnya.
        </HeroSubtitle>
        <ButtonWrapper>
          <ButtonVariant variant="solid" label="Pesan Sekarang" onClick={handleContact} />
          <ButtonVariant variant="outline" label="Lihat Katalog" onClick={() => scrollTo('produk')} />
        </ButtonWrapper>
      </HeroSection>

      {/* PROFIL SINGKAT */}
      <ProfileSection id="tentang">
        <ProfileContent>
          <ProfileImage>
            <img src="https://i.pinimg.com/736x/5a/aa/d2/5aaad243a6cc3e7e3c1f6669b50b260d.jpg" alt="Pranata Florist" />
          </ProfileImage>
          <ProfileText>
            <h2>Tentang Pranata Florist</h2>
            <p>
              <strong>"Wujudkan Momen Spesial Anda dengan Keindahan Bunga Terbaik!"</strong>
            </p>
            <p>
              Pranata Florist adalah toko bunga terpercaya di Banyuwangi yang siap melayani semua kebutuhan
              karangan bunga Anda. Mulai dari wedding, ulang tahun, anniversary, wisuda, ucapan selamat,
              hingga duka cita - kami menerima berbagai jenis pesanan dan siap mewujudkan request khusus
              sesuai keinginan Anda!
            </p>
            <p>
              Kepuasan pelanggan adalah prioritas kami. Ribuan customer telah membuktikan kualitas
              layanan kami dengan bunga yang selalu fresh dan hasil rangkaian yang cantik memukau.
              Tidak heran banyak pelanggan yang kembali mempercayakan momen penting mereka kepada kami!
            </p>
            <ul>
              <li>Bunga Selalu Fresh & Berkualitas</li>
              <li>Terima Custom Request</li>
              <li>Ribuan Customer Puas</li>
            </ul>
          </ProfileText>
        </ProfileContent>
      </ProfileSection>

      {/* KEUNGGULAN */}
      <Section>
        <SectionHeader>
          <SectionTitle>Mengapa Memilih Kami?</SectionTitle>
          <SectionSubtitle>Kualitas terbaik dengan pelayanan yang ramah</SectionSubtitle>
        </SectionHeader>
        <CardGrid>
          <CardVariant variant="gradient" data={{
            title: 'Bunga Segar',
            description: 'Bunga pilihan langsung dari kebun dengan kualitas terbaik',
            image: 'https://i.pinimg.com/736x/5a/aa/d2/5aaad243a6cc3e7e3c1f6669b50b260d.jpg',
            price: 'Fresh',
            rating: '5.0'
          }} />
          <CardVariant variant="gradient" data={{
            title: 'Pengiriman Cepat',
            description: 'Pengiriman tepat waktu ke seluruh wilayah',
            image: 'https://i.pinimg.com/736x/8a/65/ee/8a65eefda8faeefd57945707dc7ec363.jpg',
            price: 'Same Day',
            rating: '4.9'
          }} />
          <CardVariant variant="gradient" data={{
            title: 'Desain Elegan',
            description: 'Tim florist profesional untuk desain terbaik',
            image: 'https://i.pinimg.com/1200x/9a/0c/ef/9a0cefcf58452b9640b6c75409a7712e.jpg',
            price: 'Premium',
            rating: '5.0'
          }} />
        </CardGrid>
      </Section>

      {/* PRODUK */}
      <Section id="produk" style={{ background: '#FFF5F7' }}>
        <SectionHeader>
          <SectionTitle>Produk Unggulan</SectionTitle>
          <SectionSubtitle>Pilihan karangan bunga terbaik untuk momen spesial Anda</SectionSubtitle>
        </SectionHeader>
        <CardGrid>
          {PRODUCTS.map((product, index) => (
            <CardVariant key={index} variant="gradient" data={product} />
          ))}
        </CardGrid>
      </Section>

      {/* TESTIMONI */}
      <Section style={{ background: '#FFF0F5' }}>
        <SectionHeader>
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
          <SectionSubtitle>Testimoni dari pelanggan setia kami</SectionSubtitle>
        </SectionHeader>
        <TestimonialGrid>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <StarRating>{'★'.repeat(testimonial.rating)}</StarRating>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>{testimonial.name.charAt(0)}</AuthorAvatar>
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </Section>

      {/* KONTAK / CTA */}
      <CTASection id="kontak">
        <CTATitle>Siap Memesan?</CTATitle>
        <CTAText>
          Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial!
        </CTAText>
        <ButtonWrapper>
          <ButtonVariant variant="pill" label="Hubungi Kami" onClick={handleContact} />
        </ButtonWrapper>
      </CTASection>

      {/* FOOTER */}
      <Footer>
        <FooterContent>
          <FooterColumn>
            <h3>Pranata Florist</h3>
            <p>Toko bunga terpercaya untuk semua kebutuhan karangan bunga Anda. Kualitas terbaik, harga terjangkau, pelayanan memuaskan.</p>
          </FooterColumn>
          <FooterColumn>
            <h3>Menu</h3>
            <a onClick={() => scrollTo('beranda')}>Beranda</a>
            <a onClick={() => scrollTo('produk')}>Produk</a>
            <a onClick={() => scrollTo('tentang')}>Tentang</a>
            <a onClick={() => scrollTo('kontak')}>Kontak</a>
          </FooterColumn>
          <FooterColumn>
            <h3>Kontak</h3>
            <p>0821 4448 2551</p>
            <p>info@pranataflorist.com</p>
            <p>Jl. Jaksa Agung Suprapto No.131, Mojopanggung, Kec. Giri, Kabupaten Banyuwangi, Jawa Timur 68425</p>
          </FooterColumn>
        </FooterContent>
        <FooterBottom>
          © 2024 Pranata Florist. All rights reserved.
        </FooterBottom>
      </Footer>
    </Main>
  );
}
