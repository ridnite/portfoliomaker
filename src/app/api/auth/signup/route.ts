import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    try {
        const { username, email, password } = await request.json()

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: 'Tüm alanlar gerekli' },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Şifre en az 6 karakter olmalı' },
                { status: 400 }
            )
        }

        const { data: existingUser } = await supabaseAdmin
            .from('users')
            .select('email')
            .eq('email', email)
            .single()

        if (existingUser) {
            return NextResponse.json(
                { error: 'Bu email zaten kullanılıyor' },
                { status: 400 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const { data: newUser, error } = await supabaseAdmin
            .from('users')
            .insert({
                username,
                email,
                password: hashedPassword
            })
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Kayıt sırasında hata oluştu' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Hesap başarıyla oluşturuldu', user: { email: newUser.email } },
            { status: 201 }
        )

    } catch (error) {
        console.error('Signup error:', error)
        return NextResponse.json(
            { error: 'Sunucu hatası' },
            { status: 500 }
        )
    }
}